import { NavLink } from "react-router-dom";
import { Analytics } from "../components/Analytics";
import { useAuth } from "../store/auth";


export const About = () => {
  const {user} = useAuth();
  return (
    <>
      <main>
        <section className="section-hero bg-white text-black ">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              {/* <p>We care to cure your Health</p> */}
              <h1>Welcome {user? `${user.username} to our website` : `to our website`}</h1>
              
              <p className="">
                <span className="font-bold">Download the App</span>: Experience the convenience of our cutting-edge ambulance booking app. Seamlessly request, track, and manage your rides at your fingertips.
              </p>
              <p className="">
                <span className="font-bold">Why Choose Us?</span>: Discover the advantages of our ambulance service, from real-time tracking to personalized medical equipment
              </p>
              <p className="">
                <span className="font-bold">Our Ambulance Fleet</span>: Explore our diverse fleet of state-of-the-art ambulances equipped with the latest technology and medical devices to meet all your transportation needs.
              </p>
              <p className="">
                <span className="font-bold">Our Commitment</span>: At the heart of our service is a deep-rooted commitment to providing reliable, efficient, and compassionate ambulance transport for all our clients.
              </p>
              <p className="">
                <span className="font-bold">Testimonials</span>: Hear from our satisfied customers and learn how our ambulance service has made a difference in their lives.
              </p>
              
              
              <div className="btn btn-group ">
                <NavLink to="/contact">
                  <button className="btn text-white"> Connect Now</button>
                </NavLink>
              </div>
            </div>
            <div className="hero-image">
              <img
                src="/src/assets/docter.svg"
                alt="coding buddies "
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>

      <Analytics />
    </>
  );
};
