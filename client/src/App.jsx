import "./App.css";
import Display from "./components/Display";
import Player from "./components/Player";
import Sidebar from "./components/Sidebar";
import "./index.css";

function App() {
  return (
    <>
      <div className=" h-screen bg-black">
        <div className="h-[90%] flex">
          <Sidebar />
          <Display />
        </div>
        <Player />
      </div>
    </>
  );
}

export default App;
