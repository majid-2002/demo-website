import { createSlice } from "@reduxjs/toolkit";

// Define the shape of a single alert object
export interface Alert {
  id: number;
  title: string;
  date: Date;
  description: string;
  LoadNo: number;
  BillTo: string;
}

interface AlertState {
  alerts: Alert[];
}

// Define the initial state
const initialState: AlertState = {
  alerts: [],
};

// Create a slice for managing alert data
const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    // Reducer to set alerts
    setAlerts: (state, action) => {
      state.alerts = action.payload;
    },
  },
});

// Export the actions and reducer
export const { setAlerts } = alertSlice.actions;
export default alertSlice.reducer;
