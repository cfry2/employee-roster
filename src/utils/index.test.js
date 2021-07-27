import * as utils from "./";
import { taxBrackets } from "../constants";

describe("getDaysFrom", () => {
  it("should calculate a calendar month from a start month using YYYY-MM-DD as input", () => {
    expect(utils.getDaysFrom("2012-02-01")).toEqual(new Date("2012-03-01"));
    expect(utils.getDaysFrom("2013-02-01")).toEqual(new Date("2013-03-01"));
  });
});

describe("getTaxBracket", () => {
  it("should get appropiate tax bracket values for given income", () => {
    const incomes = {
      "0 - $18,200": 15000,
      "$18,201 - $37,000": 30000,
      "$37,001 - $80,000": 40000,
      "$80,001 - $180,000": 180000,
      "$180,001 and over": 180001,
    };
    Object.keys(incomes).forEach((expectedBracket) => {
      expect(utils.getTaxBracket(incomes[expectedBracket])).toEqual(
        taxBrackets[expectedBracket]
      );
    });
  });
});
