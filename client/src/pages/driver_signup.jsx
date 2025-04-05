import { useState } from "react";
import { useNavigate } from "react-router-dom"; //! for after filling the data and to redirect the page into the login page
import { useAuth } from "../store/auth"; // for the context api means not need to pass the props in every components--> const 
import { toast } from "react-toastify";

export const DriverSignup = () =>{
    const [user,setUser] = useState({
        username: "",
        email: "",
        phone: "",
        password: "",
        vehicleNo: "",
        city: "",
    });

    const navigate = useNavigate();
    const {storeTokenInLS, API} = useAuth();//making a object to use the context api//also done destructuring

    // handling the input values
    const handleInput = (e) =>{
        console.log(e);//! this e gives all the info that where the change taken place and what is it's value
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,//it means only changed value will be effected not the other one
            [name]: value, //making name inside [] means it is dynamic means names can be username, password etc means changes can be in any field
        })
    }

    //handling the form submission

    const handleSubmit = async (e) =>{
        e.preventDefault(); // so that the refresh do not take place when we click on the form
        console.log(user);

        try {
            const response = await fetch(`${API}/api/auth/register/driverRegistration`,{
                method: "POST", 
                headers:{
                    'Content-Type': "application/json",
                },
                body: JSON.stringify(user),
            });
            console.log(response);
            const res_data = await response.json();//!  it consists the data which we have sent in res form the backend "register controller"--> message, token, userId
            console.log("res from server", res_data);
            if(response.ok){
                //calling a function to store the token
                storeTokenInLS(res_data.token);
                // localStorage.setItem("token", res_data.token); //edit-->we used funciton instead in store folder>>context API

                setUser({username: "",email: "",phone: "",password: "", vehicleNo: "",city:"",});
                toast.success("Registration successful");
                navigate("/"); //after signup redirect to login
            }else{
                toast.error(res_data.extraDetails? res_data.extraDetails: res_data.message );
            }
    
            
        } catch (error) {
            console.log("register",error);
        }

        
    }

    return<>
        <section>
            <main>
                <div className="section-registration bg-white text-black">
                    <div className="container grid grid-two-cols">
                        <div className="registration-image">
                            <img
                                src="\images\registraion_page_img.jpg"
                                alt="registration on ambulance now" 
                                width="500" height= "500"
                            />
                        </div>
                        <div className="registration-form">
                            <h1 className="main-heading mb3">create driver account</h1>
                            <br />
                            <form onSubmit={handleSubmit}>


                                <div>
                                    <label htmlFor="email">username</label>
                                    <input
                                        type="text"
                                        name="username"
                                        placeholder="enter your username"
                                        id="username" 
                                        required
                                        autoComplete="off"
                                        value={user.username}
                                        onChange={handleInput}//handleInput is function-->anychange in form related to username will appeare in the console target
                                        //with full data like target->name=username and target->value= user that entered
                                    />
                                </div>


                                <div>
                                    <label htmlFor="email">email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="enter your email"
                                        id="email" 
                                        required
                                        autoComplete="off"
                                        value={user.email}
                                        onChange={handleInput}
                                    />
                                </div>


                                <div>
                                    <label htmlFor="phone">phone</label>
                                    <input
                                        type="number"
                                        name="phone"
                                        placeholder="enter your phone"
                                        id="phone" 
                                        required
                                        autoComplete="off"
                                        value={user.phone}
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
                                        value={user.password}
                                        onChange={handleInput}   
                                    />
                                </div>

                                <div>
                                    <label htmlFor="vehicleNo">Vehicle No.</label>
                                    <input
                                        name="vehicleNo"
                                        placeholder="enter your vehicle No."
                                        id="vehicleNo" 
                                        required
                                        autoComplete="off" 
                                        value={user.vehicleNo}
                                        onChange={handleInput}   
                                    />
                                </div>
                                <div>
                                    <label htmlFor="city">city</label>
                                    <input
                                        name="city"
                                        placeholder="enter your  city"
                                        id="city" 
                                        required
                                        autoComplete="off" 
                                        value={user.city}
                                        onChange={handleInput}   
                                    />
                                </div>


                                <br />


                                <button type="submit" className="btn btn-submit">
                                    Register Now
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </section>

    </>
}