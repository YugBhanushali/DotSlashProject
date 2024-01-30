import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import React,{useEffect, useState} from "react";
import Login from "./Login";

const Navbar = () => {

  return (
    <div className="w-full h-30px bg-[#040714] px-[3%] py-1">
      <div className="w-full h-full text-white nav text-[12px] py-1 flex justify-between items-center">
        <div>
          <h1>PlotSaga</h1>
        </div>
        <div className="flex gap-5">
          <form action="" className="flex">
            <input type="text" className="focus:outline-none px-2 text-black" placeholder="Search..."/>
            <button className="bg-[#ED7D31] text-white flex justify-center items-center p-1 px-2 font-bold"><FaSearch/></button>
          </form>
          <Login />
          <a href="#">SignUp</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;




