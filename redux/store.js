import { configureStore } from "@reduxjs/toolkit";
import colorChangerReducer from "./colorChangeSlice";
import counterReducer from "./counterSlice";
import nameChangerReducer from "./nameChangeSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    colorChanger: colorChangerReducer,
    nameChanger: nameChangerReducer,
  },
});
