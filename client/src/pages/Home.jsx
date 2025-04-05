import { useState, useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import { Analytics } from "../components/Analytics";
import LocationAutocomplete from "../components/LocationAutocomplete";
import { useAuth } from "../store/auth"; // Import the auth context


export const Home = () => {
  // Get location state and updater function from auth context
  const { locationState, setLocationState, isLoggedIn } = useAuth();
    const { pickup, dropoffCity, dropoffHospital } = locationState;
    const [error, setError] = useState("");
    const navigate = useNavigate();
    const errorRef = useRef(null);

  // Clear error when locations are updated
  useEffect(() => {
    if (pickup && (dropoffCity && dropoffHospital)) {
      setError("");
    }
  }, [pickup, dropoffCity, dropoffHospital]);

  // Handle clicks outside the error message
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (error && errorRef.current && !errorRef.current.contains(event.target)) {
        setError("");
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [error]);

  
  // Handle location selection (from auto-detect) and object (from suggestions)
  const handleLocationSelect = (location) => {
    const locationObj = typeof location === 'string' 
        ? { description: location, place_id: Date.now().toString() }
        : location;
            // Update context state
    setLocationState(prev => ({
        ...prev,
        pickup: locationObj
    }));
};



  // Handle navigation to See Prices page
  const handleSeePrices = () => {
    //token validation
    // console.log(authorizationToken);
    // console.log("hi");
    if (!isLoggedIn) {
      navigate('/register');
      return;
    }


    // Validate inputs
    if (!pickup) {
      setError("Please enter pickup location");
      return;
    }
    if (!dropoffCity && !dropoffHospital) {
      setError("Please enter either dropoff city or hospital");
      return;
    }
    
    // Navigate to SeePrices with location data
    navigate('/home/seeprices', { 
      state: { 
        pickup: pickup.description || pickup,
        drop:  dropoffHospital
      } 
    });
  };

  return (
    <>
      <main>
        <section className="section-hero bg-white text-black">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>We are World's first Personalized Ambulance booking website</p>
              <h1>Revolutionize Your Ambulance Experience</h1>
              <p>
                Seamlessly book and track your ambulance with our real-time location services.
              </p>
              <div className="btn btn-group">
                <div className="mx-auto p-6 space-y-6">
                  {/* Error message display */}
                  {error && (
                    <div 
                      ref={errorRef}
                      className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4 rounded cursor-pointer transition-all duration-200 hover:bg-red-200"
                      onClick={() => setError("")}
                    >
                      <p className="font-bold text-lg">Error</p>
                      <p className="text-md">{error}</p>
                    </div>
                  )}
                  
                  <div className="flex flex-col justify-center gap-10">
                    {/* Pickup Location Input */}
                    <div className="flex flex-row gap-7 items-center">
                      <div className="bg-green-500 rounded-full w-5 h-5"></div>
                      <div className="flex flex-row justify-between w-full items-center rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500">
                        <LocationAutocomplete 
                          className="w-full h-20 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500" 
                          onSelect={handleLocationSelect} 
                          value={pickup?.description || ""}
                        />
                      </div>
                    </div>

                    {/* Dropoff City Input */}
                    <div className="flex flex-row items-center gap-7 justify-between">
                      <div className="flex w-full flex-row gap-7 items-center space-x-3">
                        <div className="bg-blue-400 rounded-full w-5 h-5"></div>
                        <input
                          type="text"
                          placeholder="Enter dropoff city"
                          className="w-full h-20 border bg-gray-200 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                          value={dropoffCity}
                          onChange={(e) => setLocationState(prev => ({
                            ...prev,
                            dropoffCity: e.target.value
                        }))}
                        />
                      </div>
                      <button className="text-white" type="button">Search Hospitals</button>
                    </div>

                    {/* Dropoff Hospital Input */}
                    <div className="flex w-full flex-row gap-7 items-center space-x-3">
                      <div className="bg-red-500 rounded-full w-5 h-5"></div>
                      <input
                        type="text"
                        placeholder="Dropoff Hospital"
                        className="w-full h-20 border bg-gray-200 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                        value={dropoffHospital}
                        onChange={(e) => setLocationState(prev => ({
                          ...prev,
                          dropoffHospital: e.target.value
                      }))}
                      />
                    </div>

                    {/* See Prices Button */}
                    <button 
                      className="text-white btn w-full pl-12 bg-blue-600 hover:bg-blue-700 transition-colors duration-200 py-4 rounded-lg font-medium"  
                      onClick={handleSeePrices} 
                      type="button"
                    >
                      See Prices
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="hero-image">
              <img className="h-500 w-700" src="src/assets/docter.svg" alt="Fastest Ambulance" />
            </div>
          </div>
        </section>
      </main>

      <Analytics />

      <section className="section-hero">
        <div className="container grid grid-two-cols bg-white text-black">
          <div className="hero-image">
            <img className="h-500 w-700" src="src/assets/docter2.svg" alt="Fastest Ambulance" />
          </div>

          <div className="hero-content">
            <p>We are here to help you</p>
            <h1>Book your first Ambulance</h1>
            <p>
              Experience the convenience of our cutting-edge ambulance booking app. 
              Seamlessly request, track, and manage your rides at your fingertips.
            </p>
            <div className="btn btn-group">
              <a href="/contact">
                <button className="btn text-white">Connect Now</button>
              </a>
              <a href="/services">
                <button className="btn secondary-btn">Learn More</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};