import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Tree from "./Pages/Tree";
import Slides from "./components/Slides";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<>
          <Home/><Slides/>
        </>} />
        <Route path="/tree" element={<Tree/>}/>
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
