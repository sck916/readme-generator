/* var inquirer = require('inquirer');
var fs = require('fs')
const generateMarkdown = require("./utils/generateMarkdown") */

const generateMarkdown = require("./utils/generateMarkdown");
var inquirer = require("inquirer")

var fs = require("fs");


// array of questions for user 
const questions = [
        {
            name: 'userName',
            type: 'input',
            message:'What is your GitHub username?'
        },
        {
            name: 'email',
            type: 'input',
            message:'What is your email address?'
        },
        {
            name: 'ProjectName',
            type: 'input',
            message:'Please enter the Project Title?'
        },
        {
            name: 'projectDesciption',
            type: 'input',
            message:'Please enter the Project description?'
        },
        /* {
            
            name: 'projectLicense',
            type: 'list',
            message:'What kind of licence should your project have?'
            choices: [
                "MIT",
                "Apache 2.0",
                "GNU GPL v3.0",
                "none"
            ]
        }, */
        {
            name: 'commandDependecies',
            type: 'input',
            message:'What command shoud be run to install dependencies?'
        },
        {
            name: 'commandTests',
            type: 'input',
            message:'What command should be run to test?'
        },
        {
            name: 'repoInfo',
            type: 'input',
            message:'What does the user need to know about using the repo?'
        },
    ];



// function used to determine what license was chosen and will later be used in init function to display badge image through generateMarkdown.
const getLicense = (license) => {
    
    if(license === "MIT") {
        return `\r[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    }
    else if (license === "Apache 2.0") {
        return `\r[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    }
    else if (license === "GNU GPL v3.0") {
        return `\r[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
        
    }
}


// function to initialize program
function init() {
    // inquirer prompt will cause the questions to appear for user
    inquirer.prompt(questions).then(function(data){
       
    
        
    
    // writes file 'README.md'
    fs.writeFile("READMEE.md", generateMarkdown(data), function(error) {

        if(error) {
            return console.log(error);
        }
        console.log("New README file created!");
        })
    })
}

// function call to initialize program
init();