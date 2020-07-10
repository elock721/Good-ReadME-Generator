

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}

  ## Description
  ${data.Description}

  ## Table of Contents 

  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation
  ${data.Installation}
  ## Usage
  ${data.Usage}
  ## License
  ${data.License}
  ## Contributing
  ${data.Contributing}
  ## Tests
  ${data.Tests}
  ## Questions
  ${data.Questions}
`;
}

module.exports = generateMarkdown;
