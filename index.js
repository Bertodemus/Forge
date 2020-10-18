//Establish required modules
const fs = require("fs");
const inquirer = require("inquirer");
let readParam = "";

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
        choices: ["MIT" , "ISC", "GPLv2", "Apache"],
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
${response.gituser}
${response.email}`


    fs.writeFile("readme.md",readParam, function(err){
        if (err) {
            throw err;
        }
    });

});
