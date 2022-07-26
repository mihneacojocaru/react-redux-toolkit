## React-Redux Template

Basic instructions to create a Redux Store for your NextJS App

#### Install redux dependencies

```bash
yarn add @reduxjs/toolkit react-redux
```

#### Create a redux folder in the root directory

./redux

#### Create a store file

**store.js** with the following code:

```js
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: {},
});
```

#### Go into \_\_app.js and wrap the main _Component_ in a _Provider_ component

```js
import "../styles/globals.css";
import store from "../redux/store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
```

#### Create your first slice

Inside the redux folder, create a new js slice. Eg. **colorChangeSlice.js**

```js
import { createSlice } from "@reduxjs/toolkit";

const name = "colorChange";

//These are the states that you get through the useSelector() hook in your React Component
const initialState = {
  color: "#ff0000",
};

//these are the actions that we call through the dispatch function inside of our component
//we can define more objects for different functions inside of our actions reducer
//this replaces the classic way of writing a SWTICH-CASE reducer
const reducers = {
  colorChanger: (state, action) => {
    state.color = action.payload;
  },
};

//a redux slice accepts an object with 3 object parameters: name, initialState and reducers
//to make it easier to manage we'll position the 3 objects outside of the main object
const colorChangeSlice = createSlice({
  name: name,
  initialState: initialState,
  reducers: reducers,
});

//This is the function that you use through the dispatch hook in your ReactComponent
// const dispatch = useDispatch();
export const { colorChanger } = colorChangeSlice.actions;

// This is the default reducer that you will import into your store.js file
export default colorChangeSlice.reducer;
```

#### Import and add the newly created slice to the redux store.js

```js
import { configureStore } from "@reduxjs/toolkit";
import colorChangerReducer from "./colorChangeSlice";

export default configureStore({
  reducer: {
    colorChanger: colorChangerReducer,
  },
});
```

#### Consume the slice and its functions inside the React Component

```js
import { useDispatch, useSelector } from "react-redux";
import { colorChanger } from "../redux/colorChangeSlice";

//main ReactComponent
const ColorChangerComponent = () => {
  //this is the color value from inside the initialState of the colorChangeSlice
  const { color } = useSelector((state) => state.colorChanger);
  //create a useDispatch hook
  const dispatch = useDispatch();

  function submitColorHandler(e) {
    e.preventDefault();
    const newColor = e.target.colorInput.value;
    //use the imported colorChanger() function through the dispatch() hook created earlier
    dispatch(colorChanger(newColor));
  }

  return (
    <div>
      <h2 className="text-2xl text-center mb-5">Color Changer</h2>
      <div
        className="w-32 h-32  mx-auto"
        //use the color in the color state declared above
        style={{ backgroundColor: `${color}` }}
      ></div>
      <form className="flex flex-col my-5" onSubmit={submitColorHandler}>
        <label className="my-2 text-xl" htmlFor="colorInput">
          Inser a new color hex code:
        </label>
        <input
          className="p-2"
          name="colorInput"
          type="text"
          placeholder="ex: #ff0000"
        />
        <button
          className="my-5 p-2 border border-gray-500 rounded-lg cursor-pointer hover:bg-white hover:text-gray-800 active:text-white active:bg-black"
          type="submit"
        >
          Change Color
        </button>
      </form>
    </div>
  );
};

export default ColorChanger;
```
