const Employee = require("../lib/Employee");

test("Testing employee name.", () => {
    const name = "Nadia Alamgir";
    const employeeInstance = new Employee(name);
    expect(employeeInstance.name).toBe(name);
})

test("Test to check can create an new employee.", () => {
    const employeeInstance = new Employee();
    expect(typeof(employeeInstance)).toBe("object");
})

test("Testing Employee ID.", () => {
    const id = 2;
    const employeeInstance = new Employee("Nadia Alamgir", id);
    expect(employeeInstance.id).toBe(id);
})

test("Testing employee email.", () => {
    const email = "nadia.alamgir@gmail.com";
    const employeeInstance = new Employee("Nadia Alamgir", 2, email);
    expect(employeeInstance.email).toBe(email);
})


test("testing email through getEmployeeEmail method.", () => {
    const testEmail = "nadia.alamgir@gmail.com";
    const employeeInstance = new Employee("Nadia Alamgir", 2, testEmail);
    expect(employeeInstance.getEmployeeEmail()).toBe(testEmail);
})

test("Testing role.", () => {
    const returnValue = "Employee";
    const employeeInstance = new Employee("Nadia Alamgir", 2, "nadia.alamgir@gmail.com");
    expect(employeeInstance.getDesignation()).toBe(returnValue);
})

