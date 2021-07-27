import React from "react";
import { useSelector } from "react-redux";
import {
  getGrossForMonth,
  getSuperContributions,
  getPayPeriod,
  getFullName,
  getIncomeTax,
  getNetIncome,
} from "../../selectors";

const Payslip = () => {
  const grossMonthlyIncome = useSelector(getGrossForMonth);
  const fullName = useSelector(getFullName);
  const superContributions = useSelector(getSuperContributions);
  const payPeriod = useSelector(getPayPeriod);
  const incomeTax = useSelector(getIncomeTax);
  const netIncome = useSelector(getNetIncome);
  return (
    <div>
      <h2>Payslip for {fullName}</h2>
      <table className="uk-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>pay period</th>
            <th>Gross income</th>
            <th>Income tax</th>
            <th>net income</th>
            <th>super</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{fullName}</td>
            <td>{payPeriod}</td>
            <td>${grossMonthlyIncome}</td>
            <td>${incomeTax}</td>
            <td>${netIncome}</td>
            <td>${superContributions}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Payslip;
