import { configureStore } from "@reduxjs/toolkit";
import activitiesReducer from "../features/activities/activitiesSlice";
import cardReducer from "../features/card/cardSlice";
import alertReducer from "../features/alerts/alertSlice";

export const store = configureStore({
  reducer: {
    activities: activitiesReducer,
    card: cardReducer,
    alert: alertReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
