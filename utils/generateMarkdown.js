// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== 'None'){
    
    return`https://img.shields.io/badge/${license.split(' ').join('_')}-blue`;
  } else{
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license !=='None'){
    return `[Licenses](#Licenses)`  

  }
  else{
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(projectName,license) {
  if(license !=='None'){
    return `## Licenses  
${projectName} is licensed by ${license}  `;
  } else{
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data){
 return `# ${data.projectName}  
 
 ${renderLicenseBadge(data.licenses)}


## Table of Contents
   
   [Description](#Description)  
   [Usage](#Description)  
   [Installation](#Installation)  
   [Credits](#Credits)  
   ${renderLicenseLink(data.licenses)} 
   [Questions](#Questions)  



## Description
${data.description}
## Usage
${data.usage}  
## Installation
${data.install}

## Credits
${data.credits}
${renderLicenseSection(data.projectName,data.licenses)}
## Questions  
Hi my name is ${data.fName} ${data.lName} for questions regarding this project or my other work you can reach me via:  
Github: ${data.github}  
Email: ${data.email}  

`
;
}

module.exports = {generateMarkdown};
 
