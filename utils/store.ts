import { configureStore } from "@reduxjs/toolkit";
import activitiesReducer from "../features/activities/activitiesSlice";
import cardReducer from "../features/card/cardSlice";
import alertReducer from "../features/alerts/alertSlice";
import expenseCardReducer from "../features/expenses/expenseSlice";

/**
 * Store configuration for the application
 */
export const store = configureStore({
  reducer: {
    activities: activitiesReducer,
    card: cardReducer,
    alert: alertReducer,
    expenseCard: expenseCardReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
