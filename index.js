// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Enter a description of your project',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Enter installation instructions for your project',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Enter usage information for your project',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Enter contribution guidelines for your project',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'Enter test instructions for your project',
        name: 'test',
    },
    {
        type: 'input',
        message: 'What is your GitHub profile?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
    },
    {
        type: 'list',
        message: 'What license does your application use?',
        choices: [
            'MIT', 'EPL_1.0', 'Apache_2.0', 'GPLv3', 'GPLv2', 'ISC', 'None',
        ],
        name: 'license'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // fileName = `${data.title.toLowerCase().split(' ').join('')}.md`;
    fs.writeFile(fileName, data, (err) => err ? console.log(err) : console.log('Success!'))
}

// function writeToFile(data) {
//     fs.writeFile('README3.md', generateMarkdown(data), (err) => err ? console.log(err) : console.log('Success!'))
// }

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((data) =>  writeToFile('README.md', generateMarkdown(data)))
}

// Function call to initialize app
init();
