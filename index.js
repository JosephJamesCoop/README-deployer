const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')

// Generate Badges up to 3
const badgeOne = (outputData) => {
  if (outputData.confirmBadgeOne == true) {
    const one = outputData.bLabel
    const label = one.replaceAll(' ', '%20')
    const two = outputData.bMessage
    const message = two.replaceAll(' ', '%20')
    return `[badge](https://img.shields.io/badge/${label}-${message}-${outputData.bColor})`
  } else {
    return ''
  }
};

const badgeTwo = (outputData) => {
  if (outputData.confirmBadgeTwo == true) {
    const one = outputData.bBLabel
    const label = one.replaceAll(' ', '%20')
    const two = outputData.bBMessage
    const message = two.replaceAll(' ', '%20')
    return `[badge](https://img.shields.io/badge/${label}-${message}-${outputData.bBColor})`
  } else {
    return ''
  }
};

const badgeThree = (outputData) => {
  if (outputData.confirmBadgeThree == true) {
    const one = outputData.bBBLabel
    const label = one.replaceAll(' ', '%20')
    const two = outputData.bBBMessage
    const message = two.replaceAll(' ', '%20')
    return `[badge](https://img.shields.io/badge/${label}-${message}-${outputData.bBBColor})`
  } else {
    return ''
  }
};


// This will filter for undefined if optional items are not selected.

const contents = (outputData) => {
  if (outputData.confirmTableOfContents === true) {
    return outputData.Contents;
  } else {
    return 'none'
  }
};

const features = (outputData) => {
  if (outputData.confirmFeatures === true) {
    return outputData.Features;
  } else {
    return 'none'
  }
};

const contributing = (outputData) => {
  if (outputData.confirmContributing === true) {
    return outputData.Contributing;
  } else {
    return 'none'
  }
};

const tests = (outputData) => {
  if (outputData.confirmTests === true) {
    return outputData.Tests;
  } else {
    return 'none'
  }
};


// generates name of license
const licensing = (licenseSelector) => {
  if (licenseSelector.License == 'AGPLv3') {
    return '### GNU Affero General Public License v3.0'
  } else if (licenseSelector.License == 'GPLv3') {
    return '### GNU General Public License v3.0'
  } else if (licenseSelector.License == 'LGPLv3') {
    return '### GNU Lesser General Public License v3.0'
  } else if (licenseSelector.License == 'Mozilla') {
    return '### Mozilla Public License 2.0'
  } else if (licenseSelector.License == 'Apache') {
    return '### Apache License 2.0'
  } else if (licenseSelector.License == 'MIT') {
    return '### MIT License'
  } else if (licenseSelector.License == 'Boost') {
    return '### Boost Software License 1.0'
  } else if (licenseSelector.License == 'Unlicense') {
    return '### The Unlicense'
  } else {
    return ""
  }
};

// Adds Badge and Hyperlink to license info

const licensingBadge = (licenseSelector) => {
  if (licenseSelector.License == 'AGPLv3') {
    return '### [![License](https://img.shields.io/badge/License-GNU%20AGPLv3-red)](https://choosealicense.com/licenses/agpl-3.0/)'
  } else if (licenseSelector.License == 'GPLv3') {
    return '### [![License](https://img.shields.io/badge/License-GNU%20GPLv3-red)](https://choosealicense.com/licenses/gpl-3.0/)'
  } else if (licenseSelector.License == 'LGPLv3') {
    return '### [![License](https://img.shields.io/badge/License-GNU%20LGPLv3-red)](https://choosealicense.com/licenses/lgpl-3.0/)'
  } else if (licenseSelector.License == 'Mozilla') {
    return '### [![License](https://img.shields.io/badge/License-Mozilla%20PL%202.0-red)](https://choosealicense.com/licenses/mpl-2.0/)'
  } else if (licenseSelector.License == 'Apache') {
    return '### [![License](https://img.shields.io/badge/License-Apache%202.0-red)](https://choosealicense.com/licenses/apache-2.0/)'
  } else if (licenseSelector.License == 'MIT') {
    return '### [![License](https://img.shields.io/badge/License-MIT%20License-red)](https://choosealicense.com/licenses/mit/)'
  } else if (licenseSelector.License == 'Boost') {
    return '### [![License](https://img.shields.io/badge/License-Boost%20SL%201.0-red)](https://choosealicense.com/licenses/bsl-1.0/)'
  } else if (licenseSelector.License == 'Unlicense') {
    return '### [![License](https://img.shields.io/badge/License-The%20Unlicense-green)](https://choosealicense.com/licenses/unlicense/)'
  } else {
    return ""
  }
};


// TODO: Create a function to write README file

const writeFile = (inputData) => {

  fs.writeFile('./README.md',
  `
  # Your Project Title
  
  ${inputData.Title}
      
      
  ## Description 
      
  ${inputData.Description}
      
  ${inputData.Link}
      
      
  ## Table of Contents (Optional)
      
  ${contents(inputData)}
      
      
  ## Installation
      
  ${inputData.Installation}
      
      
  ## Usage 
      
  ${inputData.Usage}
      
      
  ## Credits
      
  ${inputData.Credits}
      
      
  ## License
      
  ${licensing(inputData)}
  ${licensingBadge(inputData)}
      
      
  ## Badges
      
  ${badgeOne(inputData)} 
  ${badgeTwo(inputData)} 
  ${badgeThree(inputData)} 
      
  ## Features
      
  ${features(inputData)}
      
      
  ## Contributing
      
  ${contributing(inputData)}
      
      
  ## Tests
      
  ${tests(inputData)}
      
  `,
  err => {
      if (err) {
        console.log(err)
      }
    });
};

// this is the main function that prompts all the questions
const init = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'Title',
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
      name: 'Description',
      message: 'Enter a description for your project, include what, why, and how. (Required)',
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
      type: 'input',
      name: 'Link',
      message: 'Enter a link to your deployed application',
    },
    {
      type: 'confirm',
      name: 'confirmTableOfContents',
      message: 'Would you like to include a table of contents? (optional)',
      default: true
    },
    {
      type: 'input',
      name: 'Contents',
      message: 'Provide a table of contents for your project: * [Installation](#installation) * [Usage](#usage) * [Credits](#credits) * [License](#license)',
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
      name: 'Installation',
      message: 'Provide installtion instructions for your project.  (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please provide some information on how to install your project. What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'Usage',
      message: 'How or what is your project used for, create relative paths if you would like to include screen shots. (Required)',
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
      type: 'confirm',
      name: 'confirmLicense',
      message: 'Would you like to include any lincensing? (optional)',
      default: true
    },
    {
      type: 'list',
      name: 'License',
      message: 'Please select a license for your project:',
      choices: ['AGPLv3', 'GPLv3', 'LGPLv3', 'Mozilla', 'Apache', 'MIT', 'Boost', 'Unlicense'],
      when: ({ confirmLicense }) => {
        if (confirmLicense) {
          return true;
        } else {
          return false;
        }
      }
    },
    {
      type: 'confirm',
      name: 'confirmBadgeOne',
      message: 'Would you like to include any Badges? (optional)',
      default: false,
    },
    {
      type: 'input',
      name: 'bLabel',
      message: 'Provide a label for your badge:',
      when: ({ confirmBadgeOne }) => {
        if (confirmBadgeOne) {
          return true;
        } else {
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'bMessage',
      message: 'Provide a message for your badge:',
      when: ({ confirmBadgeOne }) => {
        if (confirmBadgeOne) {
          return true;
        } else {
          return false;
        }
      }
    },
    {
      type: 'list',
      name: 'bColor',
      message: 'Provide a label for your badge:',
      choices: ['red', 'blue', 'green', 'yellow', 'gray', 'black', 'purple'],
      when: ({ confirmBadgeOne }) => {
        if (confirmBadgeOne) {
          return true;
        } else {
          return false;
        }
      }
    },
    {
      type: 'confirm',
      name: 'confirmBadgeTwo',
      message: 'Would you like to add another badge? (optional)',
      default: false,
      when: ({ confirmBadgeOne }) => {
        if (confirmBadgeOne) {
          return true;
        } else {
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'bBLabel',
      message: 'Provide a label for your badge:',
      when: ({ confirmBadgeTwo }) => {
        if (confirmBadgeTwo) {
          return true;
        } else {
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'bBMessage',
      message: 'Provide a message for your badge:',
      when: ({ confirmBadgeTwo }) => {
        if (confirmBadgeTwo) {
          return true;
        } else {
          return false;
        }
      }
    },
    {
      type: 'list',
      name: 'bBColor',
      message: 'Provide a label for your badge:',
      choices: ['red', 'blue', 'green', 'yellow', 'gray', 'black', 'purple'],
      when: ({ confirmBadgeTwo }) => {
        if (confirmBadgeTwo) {
          return true;
        } else {
          return false;
        }
      }
    },
    {
      type: 'confirm',
      name: 'confirmBadgeThree',
      message: 'You may add up to 3 Badges. Would you like to add a 3rd? (optional)',
      default: false,
      when: ({ confirmBadgeTwo }) => {
        if (confirmBadgeTwo) {
          return true;
        } else {
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'bBBLabel',
      message: 'Provide a label for your badge:',
      when: ({ confirmBadgeThree }) => {
        if (confirmBadgeThree) {
          return true;
        } else {
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'bBBMessage',
      message: 'Provide a message for your badge:',
      when: ({ confirmBadgeThree }) => {
        if (confirmBadgeThree) {
          return true;
        } else {
          return false;
        }
      }
    },
    {
      type: 'list',
      name: 'bBBColor',
      message: 'Provide a label for your badge:',
      choices: ['red', 'blue', 'green', 'yellow', 'gray', 'black', 'purple'],
      when: ({ confirmBadgeThree }) => {
        if (confirmBadgeThree) {
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
      name: 'Features',
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
      name: 'Contributing',
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
      name: 'Tests',
      message: 'Provide a test for your project:',
      when: ({ confirmTests }) => {
        if (confirmTests) {
          return true;
        } else {
          return false;
        }
      }
    },])

};

// Function call to initialize app
init()
.then(README => {
    return writeFile(README)
  });