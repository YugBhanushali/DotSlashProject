import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import Home from "../Pages/Home";

const Navbar = () => {
  
    const { user, googleSignIn, logOut } = UserAuth;

  return (
    <div className="">
      
    </div>
  );
};

export default Navbar;