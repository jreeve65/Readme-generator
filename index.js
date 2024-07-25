// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const gm = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
inquirer
.prompt([
{
    type: 'input',
    name: 'projectName',
    message: 'What is the name of your project?',
},
{
    type:'input',
    name: 'fName',
    message: 'What is your first name?',
},
{
    type: 'input',
    name: 'lName',
    message: 'What is your last name?',
},
{
    type: 'input',
    name: 'description',
    message: 'Please provide a breif description of your project.',
},
{
    type: 'input',
    name: 'usage',
    message: 'Please describe how your project is intended to be used. ',
},
{
    type: 'input',
    name: 'install',
    message:'Please describe any external installations needed to run this program. if no extra installations are required type N/A.',
},
{
    type: 'input',
    name:'credits',
    message:'please breifly describe who helped build this project and how they contributed. If there were no contributors type N/A.',

},
{
    type: 'list',
    name: 'licenses',
    message: 'What kind of license was used for this project?',
    choices: ['MIT','Apache License 2.0','GNU v3.0','BSD2','BSD3','Boost Software License 1.0','Creative Commons Zero v1.0','Eclipse Public License 2.0','GNU v3.0','GNU v2.1','Mozilla Public License 2.0','The Unlicense','None'],
},
{
    type: 'input',
    name: 'github',
    message: 'What is your git hub username?',

},
{
    type:'input',
    name:'email',
    message:'what is your email address?',
}

])
.then((answers)=>{
    writeToFile('example.md',answers);

})

// TODO: Create a function to write README file
function writeToFile(fileName,data){
    const content = gm.generateMarkdown(data);
    fs.writeFile(fileName,content, err => {err? console.log(err):console.log('Success!')});
}



