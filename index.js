const inquirer = require('inquirer');
const fs = require('fs');

// This will filter for undefined if optional items are not selected.

const contents = (outputData) => {
  if (outputData.confirmTableOfContents == true) {
    return outputData.Contents;
  } else {
    return 'none'
  }
};

const badges = (outputData) => {
  if (outputData.confirmBadges == true) {
    return outputData.Badges;
  } else {
    return 'none'
  }
};

const features = (outputData) => {
  if (outputData.confirmFeatures == true) {
    return outputData.Features;
  } else {
    return 'none'
  }
};

const contributing = (outputData) => {
  if (outputData.confirmContributing == true) {
    return outputData.Contributing;
  } else {
    return 'none'
  }
};

const tests = (outputData) => {
  if (outputData.confirmTest == true) {
    return outputData.Test;
  } else {
    return 'none'
  }
};


// generates name of license
const licensing = (licenseSelector) => {
  console.log(licenseSelector)
  console.log(licenseSelector.License)
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
  console.log(licenseSelector)
  console.log(licenseSelector.License)
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
      
  ${badges(inputData)}
      
      
  ## Features
      
  ${features(inputData)}
      
      
  ## Contributing
      
  ${contributing(inputData)}
      
      
  ## Tests
      
  ${tests(inputData)}
      
  `
    , err => {
      if (err) {
        console.log(err)
      }
    });
};

// TODO: Create a function to initialize app
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
      type: 'checkbox',
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
.then(data => {
  writeFile(data)
});