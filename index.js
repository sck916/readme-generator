var inquirer = require('inquirer');


// array of questions for user
const questions = [
    inquirer.prompt([
        {
            name: 'userName',
            type: 'input',
            message:'What is your GitHub username?'
        },
        {
            name: 'email address',
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
        {
            name: 'projectLicense',
            type: 'input',
            message:'What kind of licence should your project have?'
        },
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
       
])

const generateMarkdown = require('u')

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
