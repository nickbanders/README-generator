// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: `What is the title of your project?`,
      },
      {
        type: "input",
        name: "name",
        message: `What's your name?`,
      },
      {
        type: "input",
        name: "github",
        message: `What's your GitHub username?`,
      },
      {
        type: "input",
        name: "email",
        message: `What's your e-mail address?`,
      },
      {
        type: "input",
        name: "description",
        message: `Write a description of your project.`,
      },
      {
        type: "editor",
        name: "install",
        message: `Enter instructions to install.`,
      },
      {
        type: "input",
        name: "usage",
        message: `Provide instructions and examples for use.`,
      },
      {
        type: "input",
        name: "credits",
        message: `Please add your credits.`,
      },
      {
        type: "list",
        name: "license",
        message: "Which license would you like to use? ",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
      },
      {
        type: "input",
        message: "Enter URL to image",
        name: "image"
      }
    ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log("success")
    );
};

// TODO: Create a function to initialize app
function init() {}
  inquirer.prompt(questions).then(function (data) {
      writeToFile("README.md", generateMarkdown(data));
      console.log(data);
  });
// Function call to initialize app
init();
