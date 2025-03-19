import { NavLink, Outlet ,Navigate} from "react-router-dom"
import { FaHome, FaRegListAlt, FaUser } from "react-icons/fa";//for the user icon
import { FaMessage } from "react-icons/fa6";// for the contacts icon
import {useAuth} from "../../store/auth"

export const AdminLayout = ()  =>{
    const {user, isLoading} = useAuth();
    console.log("admin Layout",user);

    if(isLoading){
        return <h1>Loading ...</h1>
    }
    if(!user.isAdmin){
        return <Navigate to="/" />
    }
    return <>
        <header>
            <div className="container">
                <nav>
                    <ul>
                        <li><NavLink to="/admin/users"> <FaUser /> User </NavLink></li>
                        <li><NavLink to="/admin/contacts"> <FaMessage /> Contacts </NavLink></li>
                        <li><NavLink to="/service"> <FaRegListAlt /> Services </NavLink></li>
                        <li><NavLink to="/"> <FaHome /> Home </NavLink></li>
                    </ul>
                </nav>
            </div>
        </header>
        <Outlet />  {/* since we are not abel to see the nested loop we have to use it */}
    </>
}