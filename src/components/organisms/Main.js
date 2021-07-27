import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addEmployeeToRoster } from "../../slices/employees";
import { employeeFormInitialState } from "../../constants";

import Roster from "../molecules/Roster";
import Payslip from "../molecules/Payslip";

const Main = () => {
  const selectedEmployee = useSelector((state) => state.selectedEmployee);
  const showRoster = useSelector(
    (state) => Object.values(state.employees).length > 0
  );
  const dispatch = useDispatch();

  const [employeeForm, updateEmployeeForm] = useState(employeeFormInitialState);

  const updateForm = (e, type) =>
    updateEmployeeForm({
      ...employeeForm,
      [type]: e.target.value,
    });

  const addEmployee = () => {
    const values = Object.values(employeeForm);
    if (values.every((value) => !!value)) {
      dispatch(addEmployeeToRoster(employeeForm));
      updateEmployeeForm(employeeFormInitialState);
    }
  };

  const { firstName, lastName, salary, startDate, superRate } = employeeForm;
  return (
    <div className="container uk-container-xlarge">
      <h1 className="uk-heading-divider">Employee Payslips</h1>
      <h2>Add an employee to the roster</h2>
      <div className="uk-grid uk-grid-small">
        <div>
          <label className="uk-form-label" for="first-name-field">
            First name
          </label>
          <input
            id="first-name-field"
            type="text"
            className="uk-input"
            value={firstName}
            onChange={(e) => updateForm(e, "firstName")}
            placeholder="First name"
          />
        </div>
        <div>
          <label className="uk-form-label" for="last-name-field">
            Last name
          </label>
          <input
            id="last-name-field"
            type="text"
            value={lastName}
            className="uk-input"
            onChange={(e) => updateForm(e, "lastName")}
            placeholder="Last name"
          />
        </div>
        <div>
          <label className="uk-form-label" for="salary-field">
            Salary
          </label>
          <input
            id="salary-field"
            type="number"
            value={salary}
            className="uk-input"
            onChange={(e) => updateForm(e, "salary")}
            placeholder=" Salary"
          />
        </div>
        <div>
          <label className="uk-form-label" for="pay-period-field">
            Pay period
          </label>
          <input
            id="pay-period-field"
            type="date"
            value={startDate}
            className="uk-input"
            onChange={(e) => updateForm(e, "startDate")}
            placeholder="Start Date"
          />
        </div>
        <div>
          <label className="uk-form-label" for="super-rate-field">
            Super
          </label>
          <input
            id="super-rate-field"
            type="number"
            value={superRate}
            className="uk-input"
            onChange={(e) => updateForm(e, "superRate")}
            placeholder="Super Rate"
          />
        </div>
        <div>
          <button className="uk-button add-margin" onClick={addEmployee}>
            Add to roster
          </button>
        </div>
      </div>
      {showRoster && <Roster />}
      {selectedEmployee && <Payslip />}
    </div>
  );
};

export default Main;
