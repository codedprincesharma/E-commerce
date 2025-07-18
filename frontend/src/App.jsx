import { useEffect } from "react";
import Nav from "./components/Nav";
import MainRoute from "./routes/MainRoute";
import { asyncCurrentUser } from "./stores/actions/CartActions";
import { useDispatch } from "react-redux";
import { asynloadProducts } from "./stores/actions/ProductActions";

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncCurrentUser());
    dispatch(asynloadProducts());
  }, []);

  return (
    <div className="w-screen h-screen bg-gray-700 text-white">
      <Nav />
      <MainRoute />
    </div>
  );
};

export default App;
