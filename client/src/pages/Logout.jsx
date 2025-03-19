//to logout the user and redirect to the home page


import { useEffect } from "react"
import {Navigate} from "react-router-dom"
import { useAuth } from "../store/auth"; //! a function is present in that file to logout user and remove the token

export const Logout = () =>{

    const {LogoutUser} = useAuth();

    useEffect(() =>{
        LogoutUser();
    },[LogoutUser]);

    return <Navigate to="/login"/>;
};