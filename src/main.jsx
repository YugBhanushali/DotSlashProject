import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Navbar from "./components/Navbar.jsx";
import { BrowserRouter } from "react-router-dom";
import { TreeContextWrapper, TreeGlobalContext } from "./context/TreeContext.jsx";
import { AuthProvider } from "./Context/Authcontext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <TreeContextWrapper>
          <Navbar />
          <App />
        </TreeContextWrapper>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
