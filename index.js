//Establish required modules
const fs = require("fs");
const inquirer = require("inquirer");
let readParam = "";
let titleSvg = "";
const licenses = [
    {
        license: "MIT",
        badge: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)",
        description: "A short and simple permissive license with conditions only requiring preservation of copyright and license notices. Licensed works, modifications, and larger works may be distributed under different terms and without source code. For more details about this license: [License: MIT](https://opensource.org/licenses/MIT)"
    },
    {
        license: "MPL2.0",
        badge: "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg?style=for-the-badge)](https://opensource.org/licenses/MPL-2.0)",
        description: "Permissions of this weak copyleft license are conditioned on making available source code of licensed files and modifications of those files under the same license (or in certain cases, one of the GNU licenses). Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. However, a larger work using the licensed work may be distributed under different terms and without source code for files added in the larger work. For more details about this license: [License: MPL 2.0](https://opensource.org/licenses/MPL-2.0)"
    },
    {
        license: "GPLv3",    
        badge: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg?style=for-the-badge)](https://www.gnu.org/licenses/gpl-3.0)",
        description: "Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights. For more details about this license: [License: GPL v3](https://www.gnu.org/licenses/gpl-3.0)"
    },
    {
        license: "Apache",
        badge: "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg?style=for-the-badge)](https://opensource.org/licenses/Apache-2.0)",
        description: "A permissive license whose main conditions require preservation of copyright and license notices. Contributors provide an express grant of patent rights. Licensed works, modifications, and larger works may be distributed under different terms and without source code. For more details about this license: [License: Apache](https://opensource.org/licenses/Apache-2.0)"
    }
];

const themes = [
    {
        theme: "Teal",
        color1: "teal",
        color2: "darkcyan",
    },
    {
        theme: "Black",
        color1: "black",
        color2: "gray",
    },
    {
        theme: "Golden",
        color1: "goldenrod",
        color2: "darkorange",
    },
    {
        theme: "Red",
        color1: "red",
        color2: "blueviolet",
    },
];

// array of questions for user
inquirer
  .prompt([
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
      },
      {
        type: "list",
        message: "Choose a theme for your title:",
        name: "theme",
        choices: ["Teal" , "Black" , "Golden" , "Red"],
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
        message: "Which license do you wish to apply to this project?",
        name: "license",
        choices: ["MIT" , "MPL2.0" , "GPLv3" , "Apache"],
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
    const lic = licenses.filter(el => el.license === response.license);
    const bkg = themes.filter(el => el.theme === response.theme);

    titleSvg = 
`
<svg height="45" width="600" role="img" xmlns="http://www.w3.org/2000/svg">

<defs>
<linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:${bkg[0].color1};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${bkg[0].color2};stop-opacity:0" />
    </linearGradient>
  </defs>
  <rect width="600" height="45" fill="url(#grad3)" />
  <text fill="#ffffff" font-size="36" font-family="-apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji" x="10" y="32">${response.title}</text>
</svg>`

    fs.writeFile("title.svg", titleSvg, function(err){
        if (err) {
            throw err;
        }
    });
    

    readParam =
`
![Title with a gradient](./title.svg)

#

## Description
${response.description}

${lic[0].badge}

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

${lic[0].description}

## Contributing
${response.contribution}

## Tests
${response.tests}

## Questions
Link to my GitHub Profile: [${response.gituser}](https://github.com/${response.gituser})

If you would like to get in touch with me, feel free to email me at: [${response.email}](mailto:${response.email})`


    fs.writeFile("readme.md", readParam, function(err){
        if (err) {
            throw err;
        }
    });

});
