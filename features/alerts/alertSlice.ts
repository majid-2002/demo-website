import { createSlice } from "@reduxjs/toolkit";

export interface Alert {
  id: number;
  title: string;
  date: Date;
  description: string;
  LoadNo: number;
  BillTo: string;
  status: "ignored" | "resolved";
}

interface AlertState {
  alerts: Alert[];
}

const initialState: AlertState = {
  alerts: [],
};

const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    setAlerts: (state, action) => {
      state.alerts = action.payload;
    },
    setAlertStatus: (state, action) => {
      const { id, status } = action.payload;
      const alert = state.alerts.find((alert) => alert.id === id);
      if (alert) {
        alert.status = status;
      }
    },
  },
});

export const { setAlerts, setAlertStatus } = alertSlice.actions;

export default alertSlice.reducer;
