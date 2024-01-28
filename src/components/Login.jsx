import React, { useEffect } from 'react'
import { UserAuth } from '../Context/Authcontext';
import { useNavigate } from 'react-router-dom';


const Login = () => {
    const navigate = useNavigate();

    const { currUser, signinWithGoogle} = UserAuth()
    console.log(currUser + " from login");

    const handleLogin = async () => {
        try {
            await signinWithGoogle();
        }
        catch (err) {
            console.log(err);
        }
    }

    // if (currUser) {
    //     navigate('/Main');
    // }
    useEffect(() => {
        if (currUser) {
            navigate('/Main');
        }
    }, [currUser])

    return (
        <>
            <button onClick={handleLogin}>Login with google</button>
        </>
    )
}

export default Login