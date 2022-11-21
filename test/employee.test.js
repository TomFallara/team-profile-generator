

const Employee = require("../lib/employee");


    it("Test if Employee is an Object", () => {    
        const TestEmployee = new Employee("Greg", 4, "test@gmail.com");

        expect(typeof(TestEmployee)).toEqual(`object`);

    });

    it("Test Employee Name", () => {
        const TestEmployee = new Employee("Greg", 4, "test@gmail.com");

        expect(TestEmployee.name).toEqual(`Greg`);

    });

    it("Test Employee Id", () => {
        const TestEmployee = new Employee("Greg", 4, "test@gmail.com");

        expect(TestEmployee.id).toEqual(4);

    });

    it("Test Employee Name", () => {
        const TestEmployee = new Employee("Greg", 4, "test@gmail.com");

        expect(TestEmployee.email).toEqual(`test@gmail.com`);

    });

    it("Test Employee getName()", () => {
        const TestEmployee = new Employee("Greg", 4, "test@gmail.com");

        expect(TestEmployee.getName()).toEqual(`Greg`);

    });

    it("Test Employee getId()", () => {
        const TestEmployee = new Employee("Greg", 4, "test@gmail.com");

        expect(TestEmployee.getId()).toEqual(4);

    });

    it("Test Employee getEmail()", () => {
        const TestEmployee = new Employee("Greg", 4, "test@gmail.com");

        expect(TestEmployee.getEmail()).toEqual(`test@gmail.com`);

    });

    it("Test Employee getRole()", () => {
        const TestEmployee = new Employee("Greg", 4, "test@gmail.com");

        expect(TestEmployee.getRole()).toEqual(`Employee`);

    });