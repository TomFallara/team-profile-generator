
//create manager card
const createManager = function(manager) {
return    `<div class="row">
            <div class="col-12 col-md-6 col-lg-3 p-4">
                <h3 class="bg-dark nameplate">${manager.name}, Manager</h3>
                <ul class="cardBody text-light">
                    <li>Id: ${manager.id}</li>
                    <li>Email: <a href = "mailto:${manager.email}">${manager.email}</a></li>
                    <li>Office #: ${manager.officeNumber}</li>
                </ul>
            </div>
        </div>`
}

//create engineer card
const createEngineer = function(engineer) {
return            `<div class="row">
                <div class="col-12 col-md-6 col-lg-3 p-4">
                    <h3 class="bg-dark nameplate">${engineer.name}, Engineer</h3>
                    <ul class="cardBody text-light">
                        <li>Id: ${engineer.id}</li>
                        <li>Email: <a href = "mailto:${engineer.email}">${engineer.email}</a></li>
                        <li>Github: <a href = "mailto:${engineer.github}">${engineer.github}</a></li>
                    </ul>
                </div>
            </div>`
    }

//create intern card
    const createIntern = function(intern) {
return                `<div class="row">
                    <div class="col-12 col-md-6 col-lg-3 p-4">
                        <h3 class="bg-dark nameplate">${intern.name}, Intern</h3>
                        <ul class="cardBody text-light">
                            <li>Id: ${intern.id}</li>
                            <li>Email: <a href = "mailto:${intern.email}">${intern.email}</a></li>
                            <li>School: ${intern.school}</li>
                        </ul>
                    </div>
                </div>`
        }


 
let htmlTemplateTop =
`<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Member Board</title>
    <link rel="stylesheet" href="./style.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css">
</head>

<body>
    <header class="container-fluid bg-dark text-light mb-0 p-10">
        <div class="d-flex justify-content-center header">Our Team</div>
    </header>
        <div class="cardSpace container-fluid">`
 
let htmlTemplateBottom =
`        </div>
</body>

</html>`

const createHtml = (data) => {
        console.log(data);
    for(i=0; i<data.length; i++) {
        if (data[i].getRole() === "Manager") {
            htmlTemplateTop += createManager(data[i])
        }
        if (data[i].getRole() === "Engineer") {
            htmlTemplateTop += createEngineer(data[i])
        }
        if (data[i].getRole() === "Intern") {
            htmlTemplateTop += createIntern(data[i])
        }
    }
    htmlTemplateTop += htmlTemplateBottom;
    return htmlTemplateTop;
}
module.exports = createHtml