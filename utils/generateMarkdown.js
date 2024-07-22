// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(projectName,fName,lName,description,usage,install,credits,licenses){
 return `# ${projectName}

## Table of Contents
1. About me  
2. Description  
3. Usage  
4. Installation  
5. Sample Screen shots  
6. Credits  
7. Licenses  


## About me
Hi my name is ${fName} ${lName} and I am a software developer this Readme was actually generated using the code I am providing in this repository the languages I am familiar with are:  
JavaScript  
Html  
CSS  
You can find me on: [gitHub] or discord[discordname]  
(Feel free to go into index.js and edit the about me section in the writeToFile funcion to meet information specific to you).
## Description
${description}
## Usage
${usage}  
## Installation
${install}
## Screen Shots

## Credits
${credits}
## Licenses
License used ${licenses}`
;
}

module.exports = generateMarkdown;
