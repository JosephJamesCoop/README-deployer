const inquirer = require('inquirer');


// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];


const questions = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'title',
        message: 'What is your project titled? (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('A title for your project is required.');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'Destrition',
        message: 'Enter a description for your project. (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('A descrition of your project is required.');
            return false;
          }
        }
      },
      {
        type: 'confirm',
        name: 'confirmTableOfContents',
        message: 'Would you like to include a table of contents? (optional)',
        default: true
      },
      {
        type: 'input',
        name: 'tableOfContents',
        message: 'Provide a table of contents for your project:',
        when: ({ confirmTableOfContents }) => {
          if (confirmTableOfContents) {
            return true;
          } else {
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'Installtion',
        message: 'Provide installtion instructions for your project. (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please provide some information on how to install your project.');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'usage',
        message: 'How or what is your project used for. (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('Please provide usage information.');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'Credits',
        message: 'List all of the collaborators: Names, GitHub Accounts, Third-Party Assets, tutorials, etc. (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('A minimum of your name required.');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'License',
        message: 'Enter any licensing. (Required)',
        validate: nameInput => {
          if (nameInput) {
            return true;
          } else {
            console.log('A descrition of your project is required.');
            return false;
          }
        }
      },
      {
        type: 'confirm',
        name: 'confirmBadges',
        message: 'Would you like to include any Badges? (optional)',
        default: false
      },
      {
        type: 'input',
        name: 'Badges',
        message: 'Provide any badges for your project:',
        when: ({ confirmBadge }) => {
          if (confirmBadge) {
            return true;
          } else {
            return false;
          }
        }
      },
      {
        type: 'confirm',
        name: 'confirmFeatures',
        message: 'Would you like to include any features? (optional)',
        default: false
      },
      {
        type: 'input',
        name: 'features',
        message: 'Provide any features for your project:',
        when: ({ confirmFeatures }) => {
          if (confirmFeatures) {
            return true;
          } else {
            return false;
          }
        }
      },
      {
        type: 'confirm',
        name: 'confirmContributing',
        message: 'Would you like to include any contributing? (optional)',
        default: false
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Provide any contributing for your project:',
        when: ({ confirmContributing }) => {
          if (confirmContributing) {
            return true;
          } else {
            return false;
          }
        }
      },
      {
        type: 'confirm',
        name: 'confirmTests',
        message: 'Would you like to include any tests? (optional)',
        default: false
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Provide a test for your project:',
        when: ({ confirmTests }) => {
          if (confirmTests) {
            return true;
          } else {
            return false;
          }
        }
      },
    ]);
  };
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

