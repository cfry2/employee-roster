import * as selectors from "./";
const state = {
  employees: {
    1: {
      id: 1,
      salary: 80000,
      firstName: "John",
      lastName: "Doe",
      superRate: 10,
      startDate: "2021-07-09",
    },
  },
  selectedEmployee: 1,
};

describe("getGrossForMonth", () => {
  it("should calculate monthly gross salary", () => {
    expect(selectors.getGrossForMonth(state)).toEqual(6667);
  });
  it("should round to nearest integer", () => {
    const alteredState = {
      ...state,
      employees: {
        1: {
          ...state.employees[1],
          salary: 40000,
        },
      },
    };
    expect(selectors.getGrossForMonth(alteredState)).toEqual(3333);
  });
});

describe("getSuperContributions", () => {
  it("should calculate monthly super contributions", () => {
    expect(selectors.getSuperContributions(state)).toEqual(667);
  });
  it("should round to nearest integer", () => {
    const alteredState = {
      ...state,
      employees: {
        1: {
          ...state.employees[1],
          salary: 40000,
        },
      },
    };
    expect(selectors.getSuperContributions(alteredState)).toEqual(333);
  });
});

describe("getPayPeriod", () => {
  it("should output current pay run", () => {
    expect(selectors.getPayPeriod(state)).toEqual("9 July - 9 Aug");
  });
});

describe("getFullName", () => {
  it("should output employees full name", () => {
    expect(selectors.getFullName(state)).toEqual("John Doe");
  });
});

describe("getIncomeTax", () => {
  it("should output income tax for all tax bands", () => {
    const incomes = [15000, 25000, 50000, 100000, 250000];
    const expectedResult = [0, 108, 650, 2079, 13246];
    incomes.forEach((income, index) => {
      const alteredState = {
        ...state,
        employees: {
          1: {
            ...state.employees[1],
            salary: income,
          },
        },
      };
      expect(selectors.getIncomeTax(alteredState)).toEqual(
        expectedResult[index]
      );
    });
  });
});

describe("getNetIncome", () => {
  it("Should calculate net income", () => {
    expect(selectors.getNetIncome(state)).toEqual(5205);
  });
});
