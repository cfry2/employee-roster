import { configureStore } from "@reduxjs/toolkit";
import employees from "./slices/employees";
import selectedEmployee from "./slices/selectedEmployee";

export const store = configureStore({
  reducer: {
    employees,
    selectedEmployee,
  },
});
