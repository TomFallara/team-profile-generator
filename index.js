

const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
const inquirer = require('inquirer');
const fs = require('fs');

function addEmployee() {
    inquirer.prompt([{

        type: 'list',
        message: `What role does this employee fill?`,
        name: 'role',
        choices: [`Engineer`, `Intern`, `Manager`]
    }])
        .then(function (input) {
            switch (input.role) {
                case `Manager`: addManager();
                    break;
                case `Engineer`: addEngineer();
                    break;
                case `Intern`: addIntern();
                    break;
                default: printHtml();
            }
        })
}

function addManager() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: `What is your employee's name?`,
                name: 'name',
            },
            {
                type: 'input',
                message: `What is their id?`,
                name: 'id',
            },
            {
                type: 'input',
                message: `What is their email?`,
                name: 'email',
            },
            {
                type: 'input',
                message: 'What is their office number?',
                name: 'officeNumber',
            },
        ])
        .then((data) => {
            console.log(data);
            const stuff = READMEOutput(data)
            fs.writeFile("README.md", stuff, (err) => {
                console.log(err); console.log(`README created!`)
            });
        })
}
function addEngineer() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: `What is your employee's name?`,
                name: 'name',
            },
            {
                type: 'input',
                message: `What is their id?`,
                name: 'id',
            },
            {
                type: 'input',
                message: `What is their email?`,
                name: 'email',
            },
            {
                type: 'input',
                message: 'What is their github?',
                name: 'github',
            },
        ])
        .then((data) => {
            console.log(data);
            const stuff = READMEOutput(data)
            fs.writeFile("README.md", stuff, (err) => {
                console.log(err); console.log(`README created!`)
            });
        })
}
function addIntern() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: `What is your employee's name?`,
                name: 'name',
            },
            {
                type: 'input',
                message: `What is their id?`,
                name: 'id',
            },
            {
                type: 'input',
                message: `What is their email?`,
                name: 'email',
            },
            {
                type: 'input',
                message: 'What is their school?',
                name: 'school',
            },
        ])
        .then((data) => {
            console.log(data);
            const stuff = READMEOutput(data)
            fs.writeFile("README.md", stuff, (err) => {
                console.log(err); console.log(`README created!`)
            });
        })
}

addEmployee();