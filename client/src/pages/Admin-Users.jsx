import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";// to get the token from context api to pass in the header
import { Link } from "react-router-dom";// for the editing function in the database user

export const AdminUsers = () =>{
    const [users, setUsers] = useState([]);

    const {authorizationToken, API} = useAuth();
    const getAllUsersData = async () =>{
        try {
            const response = await fetch(`${API}/api/admin/users`,{
                method:"GET",
                headers:{
                    Authorization: authorizationToken,//from the context api>>auth.jsx
                }
            });
            const data = await response.json();
            console.log(`users ${data}`);
            setUsers(data);
        } catch (error) {
            console.log(error);
        }
    }

    //delete the user on delete button
    const deleteUser = async (id) =>{
        try {
            const response = await fetch(`http://localhost:5000/api/admin/users/delete/${id}`,{
                method:"DELETE",
                headers:{
                    Authorization: authorizationToken,//from the context api>>auth.jsx
                }
            });
            const data = await response.json();
            console.log(`users after delete : ${data}`);

            if(response.ok){
                getAllUsersData();// so that we do not have to refresh the page after deletion as we have called this function in the use effect so to run the function again we will call it after deletion

            }
            
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        getAllUsersData();
    }, [])
    return <>
    <section className="admin-user-section">
        <div className="container">
            <h1> Admin User Data</h1>
        </div>
        <div className="conatiner admin-users">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((curUser, index)=>{
                        return<tr key={index}>
                            <td>{curUser.username}</td>
                            <td>{curUser.email}</td>
                            <td>{curUser.phone}</td>
                            <td><Link to={`/admin/users/${curUser._id}/edit`}>Edit</Link></td>
                            <td><button onClick={() =>deleteUser(curUser._id)}>Delete</button></td>
                        </tr>
                    })}
                </tbody>
            </table>

        </div>
    </section>
    </>
}