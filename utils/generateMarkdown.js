// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
`;
}

module.exports = generateMarkdown;










// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }





if (licenseOptions === 'GNO AG{C') {
  licenseFullName = 'GNU GP';
  licenseBadgeName = 'AGP:_v3';
  licenseLink = 'https://choosealicense.com/license/agpl-3.0';
};
// same thing as below.


const licensing = (licenseSelector) => {
  console.log(licenseSelector)
  console.log(licenseSelector.License)
  if (licenseSelector.License == 'AGPLv3') {
    return '### GNU Affero General Public License v3.0' +
    '### [![License](https://img.shields.io/badge/License-GNU%20AGPLv3-red)](https://choosealicense.com/licenses/agpl-3.0/)'
  } else if (licenseSelector.License == 'AGPLv3') {
    return '### GNU Affero General Public License v3.0' +
    '### [![License](https://img.shields.io/badge/License-GNU%20AGPLv3-red)](https://choosealicense.com/licenses/agpl-3.0/)'
  } else {
    return '1'
  }

};

if





    case 'AGPLv3':
      '### GNU Affero General Public License v3.0 [![License](https://img.shields.io/badge/License-GNU%20AGPLv3-red)](https://choosealicense.com/licenses/agpl-3.0/)'
      break;
    case GPLv3:
'### GNU General Public License v3.0' +
  '[![License](https://img.shields.io/badge/License-GNU%20GPLv3-red)](https://choosealicense.com/licenses/gpl-3.0/)'
      break;
    case LGPLv3:
      '### GNU Lesser General Public License v3.0' +
      '[![License](https://img.shields.io/badge/License-GNU%20LGPLv3-red)](https://choosealicense.com/licenses/lgpl-3.0/)'
      break;
    case Mozilla:
      '### Mozilla Public License 2.0' +
      '[![License](https://img.shields.io/badge/License-Mozilla%20PL%202.0-red)](https://choosealicense.com/licenses/mpl-2.0/)'
      break;
    case Apache:
      '### Apache License 2.0' +
      '[![License](https://img.shields.io/badge/License-Apache%202.0-red)](https://choosealicense.com/licenses/apache-2.0/)'
      break;
    case MIT:
      '### MIT License' +
      '[![License](https://img.shields.io/badge/License-MIT%20License-red)](https://choosealicense.com/licenses/mit/)'
      break;
    case Boost:
      '### Boost Software License 1.0' +
      '[![License](https://img.shields.io/badge/License-Boost%20SL%201.0-red)](https://choosealicense.com/licenses/bsl-1.0/)'
    
      break;
    case Unlicense:
      '### The Unlicense' +
      '[![License](https://img.shields.io/badge/License-The%20Unlicense-green)](https://choosealicense.com/licenses/unlicense/)'
      break;
    default:
      ""
      break;
  }


}




























const licenseData = {
  'GNO AG{C': ['GNU GP', 'AGP:_v3', 'https://choosealicense.com/license/agpl-3.0']
}

//run function
function renderLicenseBadge(license) {
  return licenseData[license]
};

// same thing below
const renderLicenseBadge = license => licenseData[license]







const variable = 'color'

const car = {
  color: 'blue'
}

console.log('cars color: ', car[variable]);






// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;


