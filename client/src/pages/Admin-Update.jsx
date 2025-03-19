import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

export const AdminUpdate = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    phone: "",
  });

  const params = useParams();
  const { authorizationToken, API } = useAuth();
  //get single user data
  const getSingleUserData = async () => {
    try {
      const response = await fetch(
        `${API}/api/admin/users/${params.id}`,
        {
          method: "GET",
          headers: {
            Authorization: authorizationToken, //from the context api>>auth.jsx
          },
        }
      );
      const data = await response.json();
      setData(data);
      console.log(`users single data : ${data}`);

      // if(response.ok){
      //     getAllUsersData();// so that we do not have to refresh the page after deletion as we have called this function in the use effect so to run the function again we will call it after deletion

      // }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSingleUserData();
  }, []);

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setData({
      ...data,
      [name]: value,
    });
  };

  // to update the data dynamically
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:5000/api/admin/users/update/${params.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: authorizationToken, //from the context api>>auth.jsx
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        toast.success("Update successfully");
      } else {
        toast.error("Not updated");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="section-contact">
      <div className="contact-content container">
        <h1 className="main-heading">Update User Data</h1>
      </div>

      {/* contact image */}

      <div className="container grid grid-two-cols">
        <div className="data-img">
          <img
            src="/images/support.png"
            alt="we are always ready to help"
            width="400"
            height="500"
          />
        </div>

        {/* data form actual content */}
        <section className="section-form">
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username">username</label>
              <input
                type="text"
                name="username"
                id="username"
                autoComplete="off"
                value={data.username}
                onChange={handleInput}
                required
              />
            </div>

            <div>
              <label htmlFor="email">email</label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="off"
                value={data.email}
                onChange={handleInput}
                required
              />
            </div>

            <div>
              <label htmlFor="phone">Mobile</label>
              <input
                type="phone"
                name="phone"
                id="phone  "
                autoComplete="off"
                value={data.phone}
                onChange={handleInput}
                required
              />
            </div>
            <div>
              <button type="submit">Update</button>
            </div>
          </form>
        </section>
      </div>
    </section>
  );
};
