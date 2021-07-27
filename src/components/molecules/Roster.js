import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveEmployee } from "../../slices/selectedEmployee";
import { removeEmployeeFromRoster } from "../../slices/employees";

const Roster = () => {
  const employees = useSelector((state) => Object.values(state.employees));
  const dispatch = useDispatch();
  const viewPayslip = (id) => dispatch(setActiveEmployee(id));
  const removeEmployee = (id) => {
    dispatch(viewPayslip(""));
    dispatch(removeEmployeeFromRoster(id));
  };
  return (
    <>
      <h2>Roster</h2>
      <table className="uk-table uk-table-divider">
        <thead>
          <tr>
            <th>id</th>
            <th>First name</th>
            <th>Last Name</th>
            <th>Salary</th>
            <th>Start date</th>
            <th>super</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {employees.map(
            ({ id, firstName, lastName, salary, startDate, superRate }) => (
              <tr key={`${id}-${firstName}-${lastName}`}>
                <td>{id}</td>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>${salary}</td>
                <td>{startDate}</td>
                <td>{superRate}%</td>
                <td>
                  <button className="uk-button" onClick={() => viewPayslip(id)}>
                    View payslip
                  </button>
                </td>
                <td>
                  <button
                    className="uk-button"
                    onClick={() => removeEmployee(id)}
                  >
                    Remove from roster
                  </button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </>
  );
};

export default Roster;
