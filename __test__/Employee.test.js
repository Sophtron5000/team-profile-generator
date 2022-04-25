const Employee = require("../lib/employee")

// describe(Employee, () => {
//     describe("initialize", () => {
//         it("should start prompted questions", () => {
//            const prompt = new prompt; 
//            const question = prompt.message
//            const mock = jest.spyOn(prompt, "message")
//            mock.mockImplementation(() => {});

           
//         })
//     })
// });

// test("Can instantiate Employee instance", () => {
//     const e = new Employee();
//     expect(typeof(e)).toBe("object");
//   });

  import employee from './lib/employee';
import inquirer from 'inquirer';

jest.mock('inquirer');

describe('Module test', () => {
  test('user input', async () => {
    expect.assertions(1);
    inquirer.prompt = jest.fn().mockResolvedValue({ email: 'some@example.com' });

    await expect(module()).resolves.toEqual({ email: 'some@example.com' });
  });
});