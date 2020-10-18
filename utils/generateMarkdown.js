
// function to generate markdown for README
function generateMarkdown(data) {
 
  return `# ${data.ProjectName}
  ${data.badge}
  
  ##Description
  ${data.ProjectDescription}
  ## Table of Contents
  [Description](#Description)
  [Installation](#Installation)
  [Usage](#Usage)
  [License]${data.projectLicense}
  [Contributions](#Contributions)
  [Test](#Test)
  [Questions](#Questions)
  ##Installation
  
  
 
  ##License
  ${data.projectLicense}
  ##Dependecies
  ${data.commandDependecies}
 
  ##Test
  ${data.commandTests}
  ##Questions
  github.com/${data.userName}
  If there are any questions about this project you can reach me at ${data.email} and I will get back to you as soon as possible.
`;
}

module.exports = generateMarkdown;