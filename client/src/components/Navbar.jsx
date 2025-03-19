import {NavLink} from "react-router-dom";  //! to prevent reloading
import "./Navbar.css"
import { useAuth } from "../store/auth"; //! to check !!Token is present or not


export const Navbar = () =>{
const {isLoggedIn} = useAuth();
    return <>
        <header>
            <div className="container ">
                <div className="logo-brand">
                    <NavLink href="/">Ambulance Now</NavLink>
                </div>
                <nav>
                    <ul>
                        <li> <NavLink to="/"> Home </NavLink></li>
                        <li> <NavLink to="/about"> About </NavLink></li>
                        <li> <NavLink to="/service"> Services </NavLink></li>
                        {isLoggedIn ?
                            <li> <NavLink to="/logout"> Logout </NavLink></li>:
                            (<>
                                <li> <NavLink to="/register"> Signup </NavLink></li>
                                
                                <li> <NavLink to="/login/userlogin"> Login </NavLink></li>
                            </>)
                        }
                        <li> <NavLink to="/contact"> Contact </NavLink></li>
                        
                    </ul>
                </nav>
            </div>
        </header>
    </>
}