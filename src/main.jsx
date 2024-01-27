import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Navbar from "./components/Navbar.jsx";
import { AuthContextProvider } from "./context/AuthContext.jsx";
import { BrowserRouter } from "react-router-dom";
import { TreeContextWrapper, TreeGlobalContext } from "./context/TreeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <AuthContextProvider> */}
        <TreeContextWrapper>
          <Navbar />
          <App />
        </TreeContextWrapper>
      {/* </AuthContextProvider> */}
    </BrowserRouter>
  </React.StrictMode>
);
