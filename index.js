//Establish required modules
const fs = require("fs");
const inquirer = require("inquirer");
let readParam = "";


// array of questions for user
inquirer
  .prompt([
    {
        type: "input",
        message: "What is your name?",
        name: "name",
      },
      {
        type: "input",
        message: "Where do you live?",
        name: "location"
      },
      {
        type: "input",
        message: "Tell me about yourself",
        name: "bio"
      },
      {
        type: "input",
        message: "What is your linkedIn URL?",
        name: "linkedin"
      },
      {
        type: "input",
        message: "What is your github URL?",
        name: "github"
      },
  ])
  .then(function(response) {
    console.log(response);
    // const readParam = response;
    // console.log(readParam);

    readParam =
`# Forge
App for generating Readme Files
<p>${response.name}</p>
<p>${response.location}</p>
<p>${response.bio}</p>
<p>${response.linkedin}</p>
<p>${response.github}</p>`


    fs.writeFile("readme.md",readParam, function(err){
        if (err) {
            throw err;
        }
    });
    
  });
