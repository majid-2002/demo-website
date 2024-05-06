import { createSlice } from "@reduxjs/toolkit";

// Initial state of the activity slice
const initialState = {
  activities: [],
};

// Create a slice for managing activities
const activitiesSlice = createSlice({
  name: "activities",
  initialState,
  reducers: {
    // Reducer to set activities
    setActivities: (state, action) => {
      state.activities = action.payload;
    },
  },
});

export const { setActivities } = activitiesSlice.actions;

export default activitiesSlice.reducer;
