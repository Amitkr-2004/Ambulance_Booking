import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../store/auth"; // for the context api means not need to pass the props in every components--> const 
import { toast } from 'react-toastify';
import { NavLink } from "react-router-dom";
// const URL = "http://localhost:5000/api/auth/login"; //!backend login page url

export const Driverlogin = () => {
    const [driver, setDriver] = useState({
        email: "",
        password: "",
    })

    const navigate = useNavigate();
    const { storeTokenInLS, API } = useAuth();//making a object to use the context api//also done destructuring because we are not exporting default

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setDriver(({
            ...driver,
            [name]: value,
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(driver);

        try {
            const response = await fetch(`${API}/api/auth/login/driverLogin`, {
                method: "POST",
                headers: {
                    'Content-Type': "application/json",
                },
                body: JSON.stringify(driver),
            });
            const res_data = await response.json();//!  it consists the data which we have sent in res form the backend "login controller"--> message, token, DriverId
            if (response.ok) {
                // alert("Login Successful");//--->now we are using toastify
                //storing the token in local storage
                storeTokenInLS(res_data.token);
                // localStorage.setItem("token", res_data.token);//edit--> we used function in store folder>>concept of CONTEXT API

                setDriver({ email: "", password: "", });// resetting the data filled in the field
                toast.success("Login successful");
                navigate("/");
            } else {
                toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
                // alert("Invalid Credential");
            }
        } catch (error) {
            console.log("Login", error);
        }
    }

    return <>

        <section>
            <main>
                <div className="section-registration bg-white text-black">
                    <div className="container grid grid-two-cols">
                        <div className="registration-image">
                            <img
                                src="/src/assets/docter2.svg"
                                alt="let's fill the login form"
                                width="500" height="500"
                            />
                        </div>
                        <div className="registration-form">
                            <h1 className="main-heading mb3">Driver login</h1>
                            <br />
                            <form onSubmit={handleSubmit}>

                                <div>
                                    <label htmlFor="email">email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="enter your email"
                                        id="email"
                                        required
                                        autoComplete="off"
                                        value={driver.email}
                                        onChange={handleInput}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="password">password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="enter your password"
                                        id="password"
                                        required
                                        autoComplete="off"
                                        value={driver.password}
                                        onChange={handleInput}
                                    />
                                </div>


                                <br />


                                <button type="submit" className="btn btn-submit text-white">
                                    Login
                                </button>
                                <div>
                                    <NavLink to="/login/userlogin">login as user</NavLink>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    </>
}