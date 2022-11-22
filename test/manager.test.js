
const Manager = require("../lib/manager");


it("Test Employee office number", () => {
    const TestOffice = 1234    
    const TestEmployee = new Manager("Bryan", 1, "test@gmail.com", TestOffice);

    expect(TestEmployee.officeNumber).toEqual(TestOffice);
});

it("Test Manager getOffice()", () => {
    const TestOffice = `TomFallara`    
    const TestEmployee = new Manager("Bryan", 1, "test@gmail.com", TestOffice);

    expect(TestEmployee.getOffice()).toEqual(TestOffice);

});

it("Test Manager getRole()", () => {
        
    const TestEmployee = new Manager("Bryan", 1, "test@gmail.com");

    expect(TestEmployee.getRole()).toEqual(`Manager`);

});