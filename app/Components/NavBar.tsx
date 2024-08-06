import { IoArrowForward } from "react-icons/io5";
import { IoMenuOutline } from "react-icons/io5";

export default function NavBar() {
   return (
      <div className="top-0 z-40 fixed md:px-20  backdrop-filter backdrop-blur-3xl shadow md:shadow-none bg-white/60 w-full transition duration-700">
         <div className="flex justify-between items-center w-full  z-50  px-4 md:px-20 py-5">
            <div className="md:flex   cursor-pointer  items-center ">
               {/* <a href="/">
            <img src={logo} alt="Logo" className="md:w-72 w-32" />
          </a> */}
               <h1 className="text-xl md:text-3xl  font-bold text-PrimaryBlue">
                  ABSOLUTEPITCH
               </h1>
            </div>

            <div className="md:flex hidden items-center space-x-[72px] text-black text-xs md:text-lg">
               <a
                  className="  hover:text-PrimaryBlue hover:underline transition duration-300 cursor-pointer"
                  href="/"
               >
                  Home
               </a>
               <a
                  className="  hover:text-PrimaryBlue hover:underline transition duration-300 cursor-pointer"
                  href="/"
               >
                  Why
               </a>
               <a
                  className="  hover:text-PrimaryBlue hover:underline transition duration-300 cursor-pointer"
                  href="/"
               >
                  Method
               </a>
               <a
                  className="  hover:text-PrimaryBlue hover:underline transition duration-300 cursor-pointer"
                  href="/"
               >
                  Contact
               </a>

               {/* <div className="flex items-center justify-between rounded-md   pl-4 py-2 pr-2 bg-PrimaryBlue text-white cursor-pointer">
                  <a
                     href="/"
                     className=" pr-4  no-underline"
                  >
                     Get Started
                  </a>
                  <div className="p-2 text-black rounded-md bg-white">
                     <IoArrowForward />
                  </div>
               </div> */}
            </div>
            <div className="block md:hidden text-PrimaryBlue text-2xl">
               <IoMenuOutline />
            </div>
         </div>
      </div>
   );
}
