import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Tree from "./Pages/Tree";
<<<<<<< HEAD
import Slides from "./components/Slides";
=======
import PrivatePage from "./components/PrivatePage";
import TreePage from "./Pages/TreePage";
>>>>>>> e48d75f554890ac88eb08a43b07546bd5e0973bb

function App() {
  return (
    <>
      <Routes>
<<<<<<< HEAD
        <Route path="/" element={<>
          <Home/><Slides/>
        </>} />
        <Route path="/tree" element={<Tree/>}/>
        <Route path="*" element={<Home />} />
=======
        <Route path="/Main" element={<PrivatePage><Home /></PrivatePage>} />
        <Route path="/:tree" element={<PrivatePage><TreePage /></PrivatePage>}/>
        <Route path="/" element={<Home />} />
>>>>>>> e48d75f554890ac88eb08a43b07546bd5e0973bb
      </Routes>
    </>
  );
}

export default App;
