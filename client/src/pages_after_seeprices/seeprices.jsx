import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaAmbulance, FaPlane, FaUserFriends } from 'react-icons/fa';
import { useAuth } from "../store/auth"; // Import the auth context

export const Seeprices = () => {
  const location = useLocation();
  const { locationState } = useAuth(); // Get location state from context
  const navigate = useNavigate();
  

  // Priority: Use location.state if available (direct navigation), otherwise use context
  const { pickup: routePickup, drop: routeDrop } = location.state || {};
  const { pickup: contextPickup, dropoffCity, dropoffHospital } = locationState;
  
  // Determine final pickup and drop values
  const pickup = routePickup || contextPickup || 'Unknown Location';
  const drop =   dropoffHospital || 'Unknown Destination';
  



  const [service, setService] = useState("Ambulance");

  // Available ambulance services data
  const services = [
    {
      type: 'Ambulance',
      src: "/images/ambulance.jpg",
      capacity: '3 (1-Patient , 2-Family Member)',
      time: '5 mins away',
      description: 'Affordable and compact rides',
      price: 2000,
    },
    {
      type: 'Air Ambulance',
      src: "/images/air_ambulance.jpg",
      capacity: '4 (1-Patient , 3-Family Member)',
      time: '15 mins away',
      description: 'Fast and reliable air transport',
      price: 10000,
    },
  ];

  // Handle service selection
  const handleServiceClick = (serviceType) => {
    console.log(`Selected service: ${serviceType}`);
    setService(serviceType);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Full-width container */}
      <div className="container mx-auto p-8">
        {/* Flex container for map and services */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Map Section (Left Side) */}
          <div className="lg:w-1/2">
            <img
              src="/images/map.png"
              alt="Map"
              className="w-full rounded-lg"
            />
            {/* Display pickup and drop locations */}
            <div className="mt-4 p-4 bg-white text-black rounded-lg shadow">
              <p className="font-semibold">Pickup: <span className="font-normal">{pickup}</span></p>
              <p className="font-semibold">Dropoff: <span className="font-normal">{drop}</span></p>
            </div>
          </div>

          {/* Service Options Section (Right Side) */}
          <div className="lg:w-1/2 flex flex-col gap-8 w-full">
            <div className="text-5xl font-bold p-10 text-gray-800 self-center">Gathering options</div>
            
            {/* Services List */}
            <div className="space-y-6">
              {services.map((serviceItem, index) => (
                <button
                  key={index}
                  className={`flex items-center p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 w-full text-left ${
                    service === serviceItem.type ? 'border-2 border-black' : 'border border-transparent'
                  }`}
                  style={{
                    backgroundColor: 'white',
                    transition: 'border-color 0.3s ease',
                  }}
                  onClick={() => handleServiceClick(serviceItem.type)}
                >
                  {/* Service Image */}
                  <img 
                    src={serviceItem.src} 
                    alt={`${serviceItem.type} service`} 
                    className='w-65  '
                  />

                  {/* Service Details */}
                  <div className="flex flex-col gap-3 w-full ml-6">
                    <div className='name_price w-full flex flex-row justify-between'>
                      <div className="text-3xl font-bold text-gray-800">{serviceItem.type}</div>
                      <div className="amount flex flex-row items-center">
                        <img src="/src/assets/rupee.svg" alt="rupee" className='h-6' />
                        <div className="text-2xl font-bold text-black ml-1">{serviceItem.price}</div>
                      </div>
                    </div>

                    <div className='flex flex-row items-center'>
                      <img src="/src/assets/person.svg" alt="Capacity" className='h-6' />
                      <div className="text-lg text-black ml-2">{serviceItem.capacity}</div>
                    </div>

                    <div className="text-gray-600">{serviceItem.time}</div>
                    <div className="text-gray-500 italic">{serviceItem.description}</div>
                  </div>
                </button>
              ))}
            </div>
            
            {/* Choose Service Button */}
            <button 
              onClick={() => navigate('/seeprices/chooseservice', { 
                state: { 
                  service, 
                  pickup, // Using the determined pickup value
                  drop    // Using the determined drop value
                } 
              })}
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors"
            >
              Choose {service}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};