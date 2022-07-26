import { createSlice } from "@reduxjs/toolkit";

const name = "colorChange";

const initialState = {
  color: "#ff0000",
};

const reducers = {
  colorChanger: (state, action) => {
    state.color = action.payload;
  },
};

const colorChangeSlice = createSlice({
  name: name,
  initialState: initialState,
  reducers: reducers,
});

export const { colorChanger } = colorChangeSlice.actions;

export default colorChangeSlice.reducer;
