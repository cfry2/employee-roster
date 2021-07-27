import employees from "./employees";
const expectedResult = {
  1: {
    firstName: "John",
    id: 1,
    lastName: "Doe",
    salary: 90000,
    startDate: "2021-07-25",
    superRate: 10,
  },
};
describe("employees", () => {
  it("addEmployeeToRoster should add an employee to roster", () => {
    const action = {
      type: "employees/addEmployeeToRoster",
      payload: {
        firstName: "John",
        lastName: "Doe",
        salary: 90000,
        startDate: "2021-07-25",
        superRate: 10,
      },
    };
    expect(employees({}, action)).toEqual(expectedResult);
  });
  it("removeEmployeeFromRoster should remove an employee from the roster", () => {
    const action = {
      type: "employees/removeEmployeeFromRoster",
      payload: 1,
    };
    const initialState = expectedResult;
    expect(employees(initialState, action)).toEqual({});
  });
});
