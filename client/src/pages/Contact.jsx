import { useState } from "react";
import { useAuth } from "../store/auth";// to fill the username and email automatically --> we fetch the data

const defaultContactForm = {
  username: "",
  email: "",
  message: "",
}

export const Contact = () => {
  const [contact, setContact] = useState(defaultContactForm);

  //process for getting the user data

  const [userData, setUserData] = useState(true);//initialized with true value
  const {user, API} = useAuth();//this user have all the data
  if(userData && user){
    setContact({
      username: user.username,
      email: user.email,
      message: "",
    })

    setUserData(false);//again it will become false after getting the data
  }

  //handle the input section
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setContact({
      ...contact,
      [name]: value,
    });
  };

  //handle submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(contact);
    try {
      const response = await fetch(`${API}/api/form/contact`,{
        method: "POST",
        headers: {
          "Content-Type":"application/json",
        },
        body: JSON.stringify(contact),
      });

      if(response.ok){
        setContact(defaultContactForm);//a formate define to avoid multiple writing
        const data = await response.json();
        console.log("this is from contact page",data);
        alert('message sent succesfully');
      }
    } catch (error) {
      alert("can't send message");
    }
  };

  return (
    <>
      <section className="section-contact bg-white text-black">
        <div className="contact-content container">
          <h1 className="main-heading">contact us</h1>
        </div>

        {/* contact image */}

        <div className="container grid grid-two-cols">
          <div className="contact-img">
            <img
              src="src\assets\docter.svg"
              alt="we are always ready to help"
              width="400"
              height="500"
            />
          </div>

          {/* contact form actual content */}
          <section className="section-form">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="off"
                  value={contact.username}
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
                  value={contact.email}
                  onChange={handleInput}
                  required
                />
              </div>

              <div>
                <label htmlFor="message">message</label>
                <textarea
                  name="message"
                  id="message"
                  autoComplete="off"
                  value={contact.message}
                  onChange={handleInput}
                  required
                  cols="30"
                  rows="6"
                ></textarea>
              </div>
              <div>
                <button className="text-white" type="submit">submit</button>
              </div>
            </form>
          </section>
        </div>

        <section className="mb-3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3639.677177848877!2d86.3055279752014!3d24.18305187837767!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f154254c7d91f3%3A0x5f75735de0bd3f76!2sHotel%20Garden%20View%20Residency%20%26%20Restaurant!5e0!3m2!1sen!2sin!4v1719842171926!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </section>
    </>
  );
};
