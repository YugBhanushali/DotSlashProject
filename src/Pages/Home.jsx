
import React, { useEffect } from "react";
import Tree from "./Tree";
import { UserAuth } from "../Context/Authcontext";
import { useNavigate } from "react-router-dom";
import Login from "../components/Login";
import { treeArrays } from "../utils/constanst"
import Navbar from "../components/Navbar";
import Slides from "../components/Slides";

const Home = () => {
  const navigate = useNavigate();

  const { currUser, logout } = UserAuth();

  const handleLogout = async () => {
    try {
      console.log("no error");
      await logout();
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(()=>{
    localStorage.setItem("trees",JSON.stringify(treeArrays))
  },[])
  return (
    <div>
        <Navbar/>
        <Slides/>
    </div>
  )
}

export default Home;
