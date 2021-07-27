import selectedEmployee from "./selectedEmployee";

describe("selectedEmployee", () => {
  it("should update selectedEmployee id", () => {
    const action = {
      type: "selectedEmployee/setActiveEmployee",
      payload: 1,
    };
    expect(selectedEmployee("", action)).toEqual(1);
    const secondAction = {
      type: "selectedEmployee/setActiveEmployee",
      payload: "",
    };
    expect(selectedEmployee(1, secondAction)).toEqual("");
  });
});
