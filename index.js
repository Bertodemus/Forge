//Establish required modules
const fs = require("fs");
const inquirer = require("inquirer");
let readParam = "";
const licenses = ["[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)","[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg?style=for-the-badge)](https://opensource.org/licenses/MPL-2.0)","[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg?style=for-the-badge)](https://www.gnu.org/licenses/gpl-3.0)","[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg?style=for-the-badge)](https://opensource.org/licenses/Apache-2.0)"]

// array of questions for user
inquirer
  .prompt([
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
      },
      {
        type: "input",
        message: "Give a brief description of your project.",
        name: "description"
      },
      {
        type: "input",
        message: "Describe the installation process.",
        name: "installation"
      },
      {
        type: "input",
        message: "Please, provide usage information.",
        name: "usage"
      },
      {
        type: "input",
        message: "What are your conribution guidelines?",
        name: "contribution"
      },
      {
        type: "input",
        message: "What are your test instructions?",
        name: "tests"
      },
      {
        type: "list",
        message: "What are your test instructions?",
        name: "license",
        choices: ["MIT" , "Mozilla", "GPLv3", "Apache"],
      },
      {
        type: "input",
        message: "What is your GitHub username?",
        name: "gituser"
      },
      {
        type: "input",
        message: "What is your email address?",
        name: "email"
      },
  ])
  .then(function(response) {
    console.log(response);
    // const readParam = response;
    // console.log(readParam);

    readParam =
`
# ${response.title}

## Description
${response.description}
${licBadge}

## Table of Contents

* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${response.installation}

## Usage
${response.usage}

## License
${response.license}

## Contributing
${response.contribution}

## Tests
${response.tests}

## Questions
Link to my GitHub Profile: [${response.gituser}](https://github.com/${response.gituser})

If you would like to get in touch with me, go ahead and email me at: [${response.email}](mailto:${response.email})`


    fs.writeFile("readme.md",readParam, function(err){
        if (err) {
            throw err;
        }
    });

});
