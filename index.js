const inquirer = require('inquirer');
const fs = require('fs');



const licensing = (licenseSelector) => {
  console.log(licenseSelector)
  console.log(licenseSelector.License)
  if (licenseSelector.License == 'AGPLv3') {
    return '### GNU Affero General Public License v3.0 [![License](https://img.shields.io/badge/License-GNU%20AGPLv3-red)](https://choosealicense.com/licenses/agpl-3.0/)'
  } else {
    return 'Test in progress'
  }
};

// This will filter for undefined if optional items are not selected.


const contents = (outputData) => {
  if (outputData.confirmTableOfContents == true) {
    return outputData.Contents;
  } else {
    return 'none'
  }
};

const license = (outputData) => {
  if (outputData.confirmLicense == true) {
    return outputData.License;
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
init().then(data => writeFile(data))
  ;
