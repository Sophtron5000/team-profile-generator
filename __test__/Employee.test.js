const Employee = require("../lib/employee")

describe(Employee, () => {
    describe("initialize", () => {
        it("should start prompted questions", () => {
           const prompt = new prompt; 
           const question = prompt.message
           const mock = jest.spyOn(prompt, "message")
           mock.mockImplementation(() => {});

           
        })
    })
});