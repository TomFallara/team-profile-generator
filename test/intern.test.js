
const Intern = require("../lib/intern");


it("Test Employee school", () => {
    const TestSchool = `OSU`    
    const TestEmployee = new Intern("Andy", 69, "test@gmail.com", TestSchool);

    expect(TestEmployee.school).toEqual(TestSchool);
});

it("Test Intern getSchool()", () => {
    const TestSchool = `OSu`    
    const TestEmployee = new Intern("Andy", 69, "test@gmail.com", TestSchool);

    expect(TestEmployee.getSchool()).toEqual(TestSchool);

});

it("Test Intern getRole()", () => {
        
    const TestEmployee = new Intern("Andy", 69, "test@gmail.com");

    expect(TestEmployee.getRole()).toEqual(`Intern`);

});