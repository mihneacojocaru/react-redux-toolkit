import { useDispatch, useSelector } from "react-redux";
import { nameChanger } from "../redux/nameChangeSlice";
const NameChanger = () => {
  const { name } = useSelector((state) => state.nameChanger);
  const dispatch = useDispatch();

  function clickHandler() {
    dispatch(nameChanger("Mihnea"));
  }

  return (
    <div className="text-center">
      <h2 className="text-2xl  mb-5">Name Changer</h2>
      <p>Add a name to the Redux Store:</p>
      <h3 className="text-3xl my-5">{name}</h3>
      <button
        className="my-5 p-2 border border-gray-500 rounded-lg cursor-pointer hover:bg-white hover:text-gray-800 active:text-white active:bg-black"
        type="button"
        onClick={clickHandler}
      >
        Add Name
      </button>
    </div>
  );
};

export default NameChanger;
