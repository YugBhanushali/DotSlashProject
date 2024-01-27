import { UserAuth } from "../context/AuthContext";

const Home = () => {

    const { user, googleSignIn, logOut } = UserAuth;

  return (
    <div className="hero min-h-screen">
        <h1 className='w-[100px] mx-auto font-bold'>Home Page</h1>
        <button onClick={logOut} className='w-[100px] mx-auto'>Log Out</button>
    </div>
  );
};

export default Home;