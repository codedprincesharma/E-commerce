import Nav from "./components/Nav";
import MainRoute from "./routes/MainRoute";

const App = () => {
  return (
    <div className="w-screen h-screen bg-gray-700 text-white">
      <Nav />
      <MainRoute />
    </div>
  );
};

export default App;
