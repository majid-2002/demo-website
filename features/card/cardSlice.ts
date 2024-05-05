import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Card {
  id: number;
  data: {
    value: number;
    label: string;
    color: string;
  }[];
}

interface CardState {
  cards: Card[];
}

const initialState: CardState = {
  cards: [],
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    setCardData: (state, action: PayloadAction<Card[]>) => {
      state.cards = action.payload.map((payloadItem) => ({
        id: payloadItem.id,
        data: payloadItem.data,
      }));
    },
  },
});

export const { setCardData } = cardSlice.actions;

export default cardSlice.reducer;
