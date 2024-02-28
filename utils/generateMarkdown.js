
function renderLicenseBadge(license) {
switch (license) {
  case 'MIT License':
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
  case 'EPL_1.0':
      return `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`;
  case 'Apache_2.0':
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
  case 'GNU GPLv3':
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
  case 'GNU GPLv2':
      return `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
  case 'ISC License':
      return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
  case 'None':
      return ''
  default:
      return ''
}
}

function renderLicenseLink(license) {
  switch (license) {
    case 'MIT License':
        return `(https://opensource.org/licenses/MIT)`;
    case 'EPL_1.0':
        return `(https://opensource.org/licenses/EPL-1.0)`;
    case 'Apache_2.0':
        return `(https://opensource.org/licenses/Apache-2.0)`;
    case 'GNU GPLv3':
        return `(https://www.gnu.org/licenses/gpl-3.0)`;
    case 'GNU GPLv2':
        return `(https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
    case 'ISC License':
        return `(https://opensource.org/licenses/ISC)`;
    case 'None':
        return ''
    default:
        return ''
  }

}

function renderLicenseSection(license) {
  if (license !=='None'){
  return `## License
  This project is licensed under [${license}](${renderLicenseLink(license)})`
  } else {
    return ''
  }
}

function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

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
