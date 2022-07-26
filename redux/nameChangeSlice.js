import { createSlice } from "@reduxjs/toolkit";

const name = "nameChange";

const initialState = {
  name: undefined,
};

const reducers = {
  nameChanger: (state, action) => {
    state.name = action.payload;
  },
};

const nameChangeSlice = createSlice({
  name: name,
  initialState: initialState,
  reducers: reducers,
});

export const { nameChanger } = nameChangeSlice.actions;

export default nameChangeSlice.reducer;
