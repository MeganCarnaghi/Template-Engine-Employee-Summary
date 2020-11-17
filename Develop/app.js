const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// Creating an empty array to push the new team members to
const newTeam = [];

// Invoking the promptToAddNewEmployee Function
promptToAddNewEmployee();

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)
function promptToAddNewEmployee(){
  inquirer.prompt([
    {
      type: "list",
      name: "add",
      message: "Do you want to add a new employee to your team?",
      choices: [
        "yes",
        "no",
      ]
    }
  ])
  .then(function(data) {
    if(data.add === "yes") {
      addEmployeeToTeam();
    } else {
      writeFile();
    }
  })
}

// Function to add a new employee to the team
function addEmployeeToTeam() {
    inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "What role does the employee have?",
            choices: [
                "manager",
                "engineer",
                "intern"
            ]
        }
    ])
    .then(function(data) {
      if (data.role === "manager") {
          addManager();
      } else if (data.role === "engineer") {
          addEngineer();
      } else {
          addIntern();
      }
  });
}

// Function to ask the appropriate questions and add a new manager to the array
function addManager() {
    inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "What is the manager's name?"
      },
      {
        type: "input",
        name: "id",
        message: "What is the manager's id?"
      },
      {
        type: "input",
        name: "email",
        message: "What is the manager's email address?"
      },
      {
      type: "input",
      name: "office",
      message: "What is the manager's office number?"
  }
    ])
    .then(function(data) {
      const employee = new Manager(data.name, data.id, data.email, data.office);
      newTeam.push(employee);
      promptToAddNewEmployee()
  });
}

// Function to ask the appropriate questions and add a new engineer to the array
function addEngineer() {
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the engineer's name?"
    },
    {
      type: "input",
      name: "id",
      message: "What is the engineer's id?"
    },
    {
      type: "input",
      name: "email",
      message: "What is the engineer's email address?"
    },
    {
    type: "input",
    name: "github",
    message: "What is the manager's GitHub username?"
}
  ])
  .then(function(data) {
    const employee = new Engineer(data.name, data.id, data.email, data.github);
    newTeam.push(employee);
    promptToAddNewEmployee()
});
}


// Function to ask the appropriate questions and add a new intern to the array
function addIntern() {
  inquirer.prompt([
    {
      type: "input",
      name: "name",
      message: "What is the intern's name?"
    },
    {
      type: "input",
      name: "id",
      message: "What is the intern's id?"
    },
    {
      type: "input",
      name: "email",
      message: "What is the intern's email address?"
    },
    {
    type: "input",
    name: "github",
    message: "What is the name of the intern's school?"
}
  ])
  .then(function(data) {
    const employee = new Intern (data.name, data.id, data.email, data.school);
    newTeam.push(employee);
    promptToAddNewEmployee()
});
}

// a function to stop the prompts and generate the files
function writeFile() {
    console.log("Creating your file. Check output folder for result.");

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR);
    }
// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!
    fs.writeFileSync(outputPath, render(newTeam), "utf-8");
}

