import { taxBrackets } from "../constants";

export const getDaysFrom = (date) => {
  const startDate = new Date(date);
  const [month, year] = [startDate.getMonth(), startDate.getFullYear()];
  const calendasDayFrom = new Date(year, month + 1, 0).getDate();
  startDate.setDate(startDate.getDate() + calendasDayFrom);
  return startDate;
};

export const getTaxBracket = (gross) => {
  switch (true) {
    case gross < 18201: {
      return taxBrackets["0 - $18,200"];
    }
    case gross > 18200 && gross < 37001: {
      return taxBrackets["$18,201 - $37,000"];
    }
    case gross > 37000 && gross < 80001: {
      return taxBrackets["$37,001 - $80,000"];
    }
    case gross > 80000 && gross < 180001: {
      return taxBrackets["$80,001 - $180,000"];
    }
    case gross > 180000: {
      return taxBrackets["$180,001 and over"];
    }
    default: {
      return taxBrackets["$180,001 and over"];
    }
  }
};
