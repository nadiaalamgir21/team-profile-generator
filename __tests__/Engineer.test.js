const Engineer = require("../lib/Engineer");

test("Testing role.", () => {
    const returnValue = "Engineer";
    const employeeInstance = new Engineer("Bill Gates", 2, "bill.gates@gmail.com", "bill.gates");
    expect(employeeInstance.getDesignation()).toBe(returnValue);
});

test("Testing getGithub will return github.", () => {
    const testGithub = "bill.gates";
    const employeeInstance = new Engineer("Bill Gates", 2, "bill.gates@gmail.com", testGithub);
    expect(employeeInstance.getGithub()).toBe(testGithub);
});


test("Test to create a github.", () => {
    const testGithub = "bill.gates";
    const employeeInstance = new Engineer("Bill Gates", 2, "bill.gates@gmail.com", testGithub);
    expect(employeeInstance.github).toBe(testGithub);
});
