import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the shape of a single card
export interface Card {
  id: number;
  data: {
    value: number;
    label: string;
    color: string;
  }[];
}

// Define the shape of the card stat
interface CardState {
  cards: Card[];
}

// Define the initial state
const initialState: CardState = {
  cards: [],
};

// Create a slice for managing card data
const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    // Reducer to set card data
    setCardData: (state, action: PayloadAction<Card[]>) => {
      // Map the payload data to the card state
      state.cards = action.payload.map((payloadItem) => ({
        id: payloadItem.id,
        data: payloadItem.data,
      }));
    },
  },
});

// Export the actions and reducer
export const { setCardData } = cardSlice.actions;
export default cardSlice.reducer;
