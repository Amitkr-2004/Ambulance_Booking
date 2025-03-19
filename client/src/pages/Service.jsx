import { useAuth } from "../store/auth";

export const Service = () => {

    const { services } = useAuth();
    return <section className="section-services bg-white text-black">
        <div className="container ">
            <div className="flex flex-col gap-10 ">
                <h1 className="p-5">About our Services</h1>
                <div className="text-4xl">Reliable and Efficient Ambulance Booking at Your Fingertips</div>
            </div>
        </div>
        <div className="container flex flex-col gap-20">
            <div className="servces flex flex-row justify-center gap-150 items-center h-110 p-4 rounded-4xl bg-gray-100 ">
                <div className="text flex flex-col gap-10 w-3xl p-10 bg-gray-100 rounded-4xl">
                    <div className="servicename text-5xl font-bold "> Easy Payment Integration</div>
                    <div className="text-4xl  p-20">Seamlessly complete your booking with a variety of secure payment options. Our platform supports credit/debit cards, digital wallets, and other convenient methods, ensuring a hassle-free transaction experience.
                    </div>
                </div>
                <img src="/images/payment.jpg" alt="" className="imagee w-2xl " />
            </div>
            <div className="servces flex flex-row justify-center gap-150 items-center h-110 p-4 rounded-4xl bg-gray-100">
                <img src="/images/advanced equipment details.jpg" alt="" className="imagee w-md" />
                <div className="text flex flex-col gap-10 w-3xl p-10 bg-gray-100 rounded-4xl">
                    <div className="servicename text-5xl font-bold "> Advanced Equipment Details</div>
                    <div className="text-4xl p-20">Choose the right ambulance equipped with state-of-the-art medical tools and life-saving equipment. Our ambulances are tailored to meet diverse medical needs, ensuring optimal care during emergencies.</div>
                </div>
            </div>
            <div className="servces flex flex-row justify-center gap-150 items-center h-110 p-4 rounded-4xl bg-gray-100">
                <div className="text flex flex-col gap-10 w-3xl p-10 bg-gray-100 rounded-4xl">
                    <div className="servicename text-5xl font-bold "> Real-Time Location Tracking
                    </div>
                    <div className="text-4xl p-20">Stay informed with real-time updates on your ambulance's location. Track the ambulance’s route and estimated arrival time, providing peace of mind and transparency during critical moments.
                    </div>
                </div>
                <img src="/images/real time location tracking.jpg" alt="" className="imagee w-2xl" />
            </div>
            <div className="servces flex flex-row justify-center gap-150 items-center h-110 p-4 rounded-4xl bg-gray-100">
                <img src="public/images/partner with us.jpg" alt="" className="imagee w-2xl" />
                <div className="text flex flex-col gap-10 w-3xl p-10 bg-gray-100 rounded-4xl">
                    <div className="servicename text-5xl font-bold ">  Partner with Us</div>
                    <div className="text-4xl p-20">Seamlessly complete your booking with a variety of secure payment options. Our platform supports credit/debit cards, digital wallets, and other convenient methods, ensuring a hassle-free transaction experience.
                    </div>
                </div>
            </div>
            <div className="servces flex flex-row justify-center gap-150 items-center h-110 p-4 rounded-4xl bg-gray-100">
                <div className="text flex flex-col gap-10 w-3xl p-10 bg-gray-100 rounded-4xl">
                    <div className="servicename text-5xl font-bold ">Career Opportunities for Drivers
                    </div>
                    <div className="text-4xl p-20">Explore rewarding career opportunities as an ambulance driver. Join our team of skilled professionals and play a vital role in providing timely and efficient emergency medical transportation.
                    </div>
                </div>
                <img src="/images/carrier as driver.jpg" alt="" className="imagee w-2xl" />
            </div>
            <div className="servces flex flex-row justify-center gap-150 items-center h-110 p-4 rounded-4xl bg-gray-100">
                <img src="/images/comprehensive patient support.jpg" alt="" className="imagee w-2xl" />
                <div className="text flex flex-col gap-10 w-3xl p-10 bg-gray-100 rounded-4xl">
                    <div className="servicename text-5xl font-bold ">Comprehensive Patient Support
                    </div>
                    <div className="text-4xl p-20">Our team of experienced medical professionals is dedicated to providing exceptional care. From booking to arrival, we ensure patients receive the support and attention they need during emergencies.
                    </div>
                </div>
            </div>
            
        </div>
    </section>
}