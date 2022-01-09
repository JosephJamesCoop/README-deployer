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



// TODO: Create a function to generate markdown for README
function generateMarkdown(inputData) {
  return `
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
    };
};


module.exports = generateMarkdown;
