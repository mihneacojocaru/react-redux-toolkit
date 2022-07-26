import { createSlice } from "@reduxjs/toolkit";

const name = "counter";

const initialState = {
  count: 0,
};

const reducers = {
  increment: (state) => {
    state.count += 1;
  },
  decrement: (state) => {
    state.count -= 1;
  },
};

const counterSlice = createSlice({
  name: name,
  initialState: initialState,
  reducers: reducers,
});

export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
