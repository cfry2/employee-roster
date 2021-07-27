import { createSelector } from "@reduxjs/toolkit";
import { getDaysFrom, getTaxBracket } from "../utils";

const getActiveEmployee = (state) => state.employees[state.selectedEmployee];

export const getGrossForMonth = createSelector(
  [getActiveEmployee],
  ({ salary }) => {
    return Math.round(salary / 12);
  }
);

export const getSuperContributions = createSelector(
  [getGrossForMonth, getActiveEmployee],
  (grossIncome, { superRate }) => {
    return Math.round(grossIncome * (superRate / 100));
  }
);

export const getPayPeriod = createSelector(
  [getActiveEmployee],
  ({ startDate }) => {
    const options = { day: "numeric", month: "short" };
    const startPeriod = new Intl.DateTimeFormat("en-AU", options).format(
      new Date(startDate)
    );
    const endPeriod = new Intl.DateTimeFormat("en-AU", options).format(
      getDaysFrom(startDate)
    );
    return `${startPeriod} - ${endPeriod}`;
  }
);

export const getFullName = createSelector(
  [getActiveEmployee],
  ({ firstName, lastName }) => `${firstName} ${lastName}`
);

export const getIncomeTax = createSelector(
  [getActiveEmployee],
  ({ salary }) => {
    const { flat, marginal, base } = getTaxBracket(salary);
    const incomeTax = (flat + (salary - base) * marginal) / 12;
    return Math.round(incomeTax);
  }
);

export const getNetIncome = createSelector(
  [getGrossForMonth, getIncomeTax],
  (gross, tax) => gross - tax
);
