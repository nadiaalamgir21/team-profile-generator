// My Attempt
const Intern = require("../lib/Intern");

test("Can create school.", () => {
    const testSchool = "School Name";
    const employeeInstance = new Intern("Elon Musk", 2, "elon.musk@gmail.com", testSchool);
    expect(employeeInstance.school).toBe(testSchool);
});


test("Testing role.", () => {
    const returnValue = "Intern";
    const employeeInstance = new Intern("Elon Musk", 2, "elon.musk@gmail.com", "School Name");
    expect(employeeInstance.getDesignation()).toBe(returnValue);
});