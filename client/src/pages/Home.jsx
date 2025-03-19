import { useState } from "react";

import { Analytics } from "../components/Analytics";


import LocationAutocomplete from "../components/LocationAutocomplete";   // location autocomplete goqapi code is in this file


export const Home = () => {

  //for location autocomplete
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    console.log("Selected Location: ", location);
  };

  return (


    <>
      <main>
        <section className="section-hero bg-white text-black">
          <div className="container grid grid-two-cols">
            <div className="hero-content ">
              <p>We are World's  first Personalized Ambulance booking website</p>
              <h1>Revolutionize Your Ambulance Experience</h1>
              <p>
                Seamlessly book and track your ambulance with our real-time location services.
              </p>
              <div className="btn btn-group">
                <div className="mx-auto  p-6 space-y-6">
                  <div className="flex flex-col  justify-center gap-10">
                    <div className="flex flex-row gap-7 items-center ">
                      <div className="bg-green-500 rounded-full w-5 h-5 "></div>
                      <div className="flex flex-row justify-between w-full  items-center  rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500  ">
                        <LocationAutocomplete className="w-full h-20  bg-gray-200  rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" onSelect={handleLocationSelect} />
  
                      </div>
                     
                    </div>

                    <div className="flex  flex-row items-center gap-7 justify-between  ">
                      <div className="flex w-full flex-row gap-7 items-center space-x-3">
                        <div className="bg-blue-400 rounded-full w-5 h-5"></div>
                        <input
                          type="text"
                          placeholder="Enter dropoff city"
                          className="w-full  h-20 border bg-gray-200 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                      </div>
                      <button className="text-white" type="button">Search Hospitals</button>
                    </div>

                    <div className="flex w-full flex-row gap-7 items-center space-x-3">
                      <div className="bg-red-500 rounded-full w-5 h-5"></div>
                      <input
                        type="text"
                        placeholder="Dropoff Hospital"
                        className="w-full  h-20 border bg-gray-200 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                      />
                    </div>


                    <button className="text-white btn w-full pl-12" type="button">see prices</button>

                  </div>

                </div>
                {/* <a href="/contact">
                  <button className="btn">Connect Now</button>
                </a>
                <a href="/services">
                  <button className="btn secondary-btn">learn more</button>
                </a> */}
              </div>
            </div>

            {/* hero image */}
            <div className="hero-image">
              <img className="h-500 w-700" src="src/assets/docter.svg" alt="Fastest Ambulance" />
            </div>
          </div>
        </section>
      </main>

      {/* 2nd section */}

      <Analytics />

      {/* section 3 */}
      <section className="section-hero">
        <div className="container grid grid-two-cols bg-white text-black">
          {/* hero image */}
          <div className="hero-image">
            <img className="h-500 w-700" src="src/assets/docter2.svg" alt="Fastest Ambulance" />
          </div>

          <div className="hero-content">
            <p>We are here to help you</p>
            <h1>Book your first Ambulance</h1>
            <p>
              Experience the convenience of our cutting-edge ambulance booking app. Seamlessly request, track, and manage your rides at your fingertips.
            </p>
            <div className="btn btn-group">
              <a href="/contact">
                <button className="btn text-white">Connect Now</button>
              </a>
              <a href="/services">
                <button className="btn secondary-btn">learn more</button>
              </a>
            </div>
          </div>
        </div>

      </section>
    </>
  );
};
