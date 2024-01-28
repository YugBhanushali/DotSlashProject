import React from "react";
import Tree from "./Tree";
import { UserAuth } from "../Context/Authcontext";
import { useNavigate } from "react-router-dom";
import Login from "../components/Login";

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

  return (
    <>
      {currUser ? <button onClick={handleLogout}>Logout</button> : <Login />}
      {/* <br />
        <br />
        <br />
        <Tree /> */}
    </>
  );
};

export default Home;
