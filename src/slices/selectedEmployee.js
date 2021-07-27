import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

export const selectedEmployee = createSlice({
  name: "selectedEmployee",
  initialState,
  reducers: {
    setActiveEmployee: (state, action) => {
      return (state = action.payload);
    },
  },
});

export const { setActiveEmployee } = selectedEmployee.actions;

export default selectedEmployee.reducer;
