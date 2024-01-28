import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate, useNavigation, useRoutes } from 'react-router-dom';
import { UserAuth } from '../Context/Authcontext';

const PrivatePage = ({ children }) => {
    const {currUser} = UserAuth();
    const rounter = useNavigate()

    useEffect(() => {
        if(!currUser){
            rounter("/")
        }
    }, [])
    

    return (
        <>
            {children}
        </>
    )
}

export default PrivatePage