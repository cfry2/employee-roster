import { createSlice } from '@reduxjs/toolkit'

const initialState = {}

export const employees = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    addEmployeeToRoster: (state, action) => {
      const id = Object.values(state).length > 0 ? Math.max(...Object.values(state).map(employee => employee.id)) : 0
      const {firstName, lastName, salary, startDate, superRate} = action.payload
      state[id+1] = {
        id: id+1,
        firstName,
        lastName,
        salary,
        startDate,
        superRate,
      }
    },
    removeEmployeeFromRoster: (state, action) => {
      delete state[action.payload]
    },
  },
})
export const { addEmployeeToRoster, removeEmployeeFromRoster, updateEmployeeOnRoster } = employees.actions

export default employees.reducer