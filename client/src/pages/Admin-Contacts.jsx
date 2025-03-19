import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import {toast} from "react-toastify";

export const AdminContacts = () => {
  const { authorizationToken , API} = useAuth();
  const [contactData, setContactData] = useState([]);

  const getContactsData = async () => {
    try {
      const response = await fetch(`${API}/api/admin/contacts`, {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });
      const data = await response.json();
      if (response.ok) {
        setContactData(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  //defining the function deleteContactById
  const deleteContactById = async(id) =>{
    try {
        const response = await fetch(`http://localhost:5000/api/admin/contacts/delete/${id}`,{
            method:'DELETE',
            headers:{
                Authorization: authorizationToken,
            }
        })
        // console.log("hello from the try block");

        if(response.ok){
            getContactsData();
            toast.success("Deleted successfully");
        }else{
            toast.error("Not Deleted");
        }
    } catch (error) {
        console.log(error);
    }
  }

  useEffect(() => {
    getContactsData();
  }, []);
  return (
    <>
      <section className="admin-contacts-section">
        <h1>Admin Contact Data</h1>

        <div className="container admin-users">
          {contactData.map((curContactData, index) => {
            const {username, email, message, _id} = curContactData;
            return (
              <div key={index} className="admin-contact">
                <p>{username}</p>
                <p>{email}</p>
                <p>{message}</p>
                <button className="btn" onClick={()=>{deleteContactById(_id)}}>delete</button>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};
