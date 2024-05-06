import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the shape of a single expense card
export interface ExpenseCard {
  id: number;
  expenseType: "income" | "expense";
  totalPayments: number;
  totalAmount: number;
}

interface ExpenseCardState {
  expenseCards: ExpenseCard[];
}

// Define the initial state
const initialState: ExpenseCardState = {
  expenseCards: [],
};

// Create a slice for managing expense card data
const expenseCardSlice = createSlice({
  name: "expenseCard",
  initialState,
  reducers: {
    // Reducer to set expense card data
    setExpenseCardData: (state, action: PayloadAction<ExpenseCard[]>) => {
      // Map the payload data to the expense card state
      state.expenseCards = action.payload.map((payloadItem) => ({
        id: payloadItem.id,
        expenseType: payloadItem.expenseType,
        totalPayments: payloadItem.totalPayments,
        totalAmount: payloadItem.totalAmount,
      }));
    },
  },
});

// Export the actions and reducer
export const { setExpenseCardData } = expenseCardSlice.actions;
export default expenseCardSlice.reducer;
