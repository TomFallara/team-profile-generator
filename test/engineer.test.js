
const Engineer = require("../lib/engineer");


it("Test Engineer github", () => {
    const TestGithub = `TomFallara`    
    const TestEmployee = new Engineer("Nceba", 5, "test@gmail.com", TestGithub);

    expect(TestEmployee.github).toEqual(TestGithub);
});

it("Test Engineer getGithub()", () => {
    const TestGithub = `TomFallara`    
    const TestEmployee = new Engineer("Nceba", 5, "test@gmail.com", TestGithub);

    expect(TestEmployee.getGithub()).toEqual(TestGithub);

});

it("Test Engineer getRole()", () => {
        
    const TestEmployee = new Engineer("Nceba", 5, "test@gmail.com");

    expect(TestEmployee.getRole()).toEqual(`Engineer`);

});