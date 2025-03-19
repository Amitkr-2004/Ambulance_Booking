
import { NavLink } from "react-router-dom";  //! to prevent reloading
export const Register = () => {
  return (
    <>

      <section>
        <main>
          <div className=" bg-white text-black flex flex-col items-center justify-center gap-40  ">
            <h1>Create account to use service</h1>


            <div className="max-w-[140rem] px-[2.4rem] py-[4rem]  mx-auto flex flex-row gap-50 items-center justify-center ">

              <div className=" ">
              <NavLink to="/register/rider-signup" >
                <div className="flex flex-col items-center justify-center gap-10 ">
                  <img src="\images\rider img.jpg" className="h-100" alt="a girl is trying to fill registration form" />
                  <div className="text-black font-semibold text-5xl">Create a Rider Account</div>
                </div>
              </NavLink>
              </div>
              <div className="">
              <NavLink to="/register/driver-signup">
                <div className="flex flex-col items-center justify-center gap-10">
                  <img src="\images\driver img.jpg" className="h-100" alt="a girl is trying to fill registration form" />
                  <div className="text-black font-semibold text-5xl">Create a Driver/helper Account</div>
                </div>
              </NavLink>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  )
}