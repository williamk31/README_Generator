
function renderLicenseBadge(license) {
// [![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
if (license !=='None'){
return `[![License](https://img.shields.io/badge/License-${license}-blue.svg)]`
} else {
  return ''
}
}

function renderLicenseLink(license) {
  if (license !=='None'){
  return `(https://opensource.org/licenses/${license})`
  } else {
    return ''
  }
}

function renderLicenseSection(license) {
  if (license !=='None'){
  return `${renderLicenseBadge(license)}${renderLicenseLink(license)}`
  } else {
    return ''
  }
}

function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}
  
  ## Table of Contents
  
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## License
  ${renderLicenseSection(data.license)}
  
  ## Contributing
  ${data.contribution}
  
  ## Tests
  ${data.test}
  
  ## Questions
  Visit my GitHub profile: ${data.github}
  
  For additional questions, email me at: ${data.email}
  
`;
}

module.exports = generateMarkdown;
