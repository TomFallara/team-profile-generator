
//create manager card
const createManager = function(manager) {
<div class="cardSpace container-fluid">
        <div class="row">
            <div class="col-12 col-md-6 col-lg-3 p-4">
                <h3 class="bg-dark nameplate">${manager.name}</h3>
                <ul class="cardBody text-light">
                    <li>${manager.id}</li>
                    <li>${manager.email}<a href = "mailto:${manager.email}"></a></li>
                    <li>${manager.officeNumber}</li>
                </ul>
            </div>
        </div>
    </div>
}

//create engineer card
const createEngineer = function(engineer) {
    <div class="cardSpace container-fluid">
            <div class="row">
                <div class="col-12 col-md-6 col-lg-3 p-4">
                    <h3 class="bg-dark nameplate">${engineer.name}</h3>
                    <ul class="cardBody text-light">
                        <li>${engineer.id}</li>
                        <li>${engineer.email}<a href = "mailto:${engineer.email}"></a></li>
                        <li>${engineer.github}<a href = "mailto:${engineer.github}"></a></li>
                    </ul>
                </div>
            </div>
        </div>
    }

//create intern card
    const createIntern = function(intern) {
        <div class="cardSpace container-fluid">
                <div class="row">
                    <div class="col-12 col-md-6 col-lg-3 p-4">
                        <h3 class="bg-dark nameplate">${intern.name}</h3>
                        <ul class="cardBody text-light">
                            <li>${intern.id}</li>
                            <li>${intern.email}<a href = "mailto:${intern.email}"></a></li>
                            <li>${intern.school}</li>
                        </ul>
                    </div>
                </div>
            </div>
        }

createHtml = (data) => {
    // pageArray = []
    // for (i =0; i < data.length; i++)
    // const employeeData = data[i];
    // const role = employee.getRole();

    //  getRole(){
    //     if(role === manager){
    //         const managerCard = createManager(Employee);
    //         pageArray.push(managerCard);
    //     }
    // }
}