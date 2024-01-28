import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Tree from "./Pages/Tree";
import PrivatePage from "./components/PrivatePage";
import TreePage from "./Pages/TreePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/Main" element={<PrivatePage><Home /></PrivatePage>} />
        <Route path="/:tree" element={<PrivatePage><TreePage /></PrivatePage>}/>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
