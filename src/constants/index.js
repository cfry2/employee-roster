export const taxBrackets = {
  "0 - $18,200": {
    flat: 0,
    marginal: 0,
    base: 0,
  },
  "$18,201 - $37,000": {
    flat: 0,
    marginal: 0.19,
    base: 18200,
  },
  "$37,001 - $80,000": {
    flat: 3572,
    marginal: 0.325,
    base: 37000,
  },
  "$80,001 - $180,000": {
    flat: 17547,
    marginal: 0.37,
    base: 80000,
  },
  "$180,001 and over": {
    flat: 54547,
    marginal: 0.45,
    base: 18000,
  },
};

export const employeeFormInitialState = {
  firstName: "",
  lastName: "",
  salary: "",
  startDate: "",
  superRate: "",
};
