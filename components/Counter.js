import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../redux/counterSlice";

const Counter = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl text-center mb-5">Increment and decrement</h2>
      <h3 className="border-4 border-sky-500 bg-white text-gray-800 rounded-lg py-1 w-1/3 text-center">
        {count}
      </h3>
      <div className="grid grid-cols-2 gap-5 my-10 items-center justify-center">
        <button
          className="text-xl border border-gray-500 bg-white text-gray-800 p-5 rounded-lg shadow-xl cursor-pointer hover:text-gray-100 hover:bg-sky-500 active:bg-white active:text-gray-800"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
        <button
          className="text-xl border border-gray-500 bg-white text-gray-800 p-5 rounded-lg shadow-xl cursor-pointer hover:text-gray-100 hover:bg-orange-400 active:bg-white active:text-gray-800"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
