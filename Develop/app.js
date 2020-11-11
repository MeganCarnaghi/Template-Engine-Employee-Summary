const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// Prompting the user to get the employee's role
function promptUser() {
    return inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "What role does the employee have?",
            choices: [
                "Manager",
                "Engineer",
                "Intern"
            ]
        }
    ])
}


function promptUser() {
    return inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "What is the employee's name"
      },
      {
        type: "input",
        name: "id",
        message: "What is the employee's ID?"
      },
      {
        type: "input",
        name: "email",
        message: "What is the employee's email address?"
      },
    ]);
}
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// Invoking the render function
render()


// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.