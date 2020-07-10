var inquirer = require("inquirer");
var generateMarkdown = require("./utils/generateMarkdown");
var fs = require("fs");
var path = require("path");


// array of questions for user
const questions = [
    {
        type: "input",
        message: "What is your project name?",
        name: "Title"
      },
      {
        type: "input",
        message: "Please describe your project.",
        name: "Description" 
      },
      {
        type: "input",
        message: "Please describe the necessary steps for installation.",
        name: "Installation"
      },
      {
        type: "input",
        message: "How will this application be used?",
        name: "Usage"
      },
      {
        type: "input",
        message: "What kind of license should your project have?",
        name: "License"
      },
      {
        type: "input",
        message: "What do I need to know to contribute to this repo?",
        name: "Contributing"
      },
      {
        type: "input",
        message: "What command do I need to make to run tests?",
        name: "Tests"
      },
      {
        type: "input",
        message: "If you have questions this is how you can contact me.",
        name: "Questions"
      },
];

// function to write README file
function writeToFile(fileName, data) {
    console.log(data)
    return fs.writeFileSync(path.join(process.cwd(),fileName),data);
}

// function to initialize program
function init() {
    inquirer
  .prompt(questions)
  .then(function(response) {
      
      writeToFile("Readme.md", generateMarkdown(response));
  });
}

// function call to initialize program
init();




    

  
