// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `[![License](https://img.shields.io/badge/license-${license}-green.svg)]`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "none") {
    return `[License](#license)`;
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none") {
    return `## License
    This project under ${license}`
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ### Created by: ${data.name}
  ### Github: ${data.github}
  ### E-mail: ${data.email}

  ## Description

  ${data.description}

  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)

  ## Installation

  ${data.install}

  ## Usage
  
  ${data.usage}

  ## Credits

  ${data.credits}

  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}
  ${renderLicenseBadge(data.license)}

  ## Image of Application
  ${data.image}
`;
}

module.exports = generateMarkdown;
