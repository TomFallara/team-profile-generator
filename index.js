
const Employee = require("./lib/employee");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const Manager = require("./lib/manager");
const htmlTemplate = require("./src/htmlTemplate")
const inquirer = require('inquirer');
const fs = require('fs');
const createHtml = require("./src/htmlTemplate");

const employeeArray = []

function addManager() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: `What is your Manager's name?`,
                name: 'name',
            },
            {
                type: 'input',
                message: `What is their id?
Please type numerals only:`,
                name: 'id',
            },
            {
                type: 'input',
                message: `What is their email?`,
                name: 'email',
            },
            {
                type: 'input',
                message: 'What number is their office, using only numerals?',
                name: 'officeNumber',
            },
        ])
        .then((data) => {
            const manager = new Manager(data.name, data.id, data.email, data.officeNumber);
            employeeArray.push(manager);
            addEmployee()
        })
}

function addEmployee() {
    inquirer.prompt([{

        type: 'list',
        message: `What role does this employee fill?`,
        name: 'role',
        choices: [`Engineer`, `Intern`, `No more employees needed`]
    }])
        .then(function (input) {
            switch (input.role) {
                case `Engineer`: addEngineer();
                    break;
                case `Intern`: addIntern();
                    break;
                default: printHtml();
            }
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
                message: `What is their id?
Please type numerals only:`,
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
            const engineer = new Engineer(data.name, data.id, data.email, data.github);
            employeeArray.push(engineer);
            addEmployee()
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
                message: `What is their id?
Please type numerals only:`,
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
            const intern = new Intern(data.name, data.id, data.email, data.school);
            employeeArray.push(intern);
            addEmployee()
        })
}

    const printHtml = () => {
        const template = createHtml(employeeArray)
        fs.writeFile("./dist/index.html", template, (err) => {
        console.log(err) ; console.log(`Team Member Board created!`)
               })
    }

addManager();