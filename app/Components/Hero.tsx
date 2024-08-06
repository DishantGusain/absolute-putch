"use client";

import { useState } from "react";
import { FaCirclePlay } from "react-icons/fa6";
import VideoModal from "./VideoModal";
import { IoArrowForward } from "react-icons/io5";
import { IoMenuOutline } from "react-icons/io5";

export default function Hero() {
   const [isOpen, setOpen] = useState(false);

   // Function to open the modal
   const openModal = () => setOpen(true);

   // Function to close the modal
   const closeModal = () => setOpen(false);

   return (
      <section
         id="hero"
         className="relative  md:px-20 bg-[#F8F9FB] "
      >
         <img
            src="/herobg.png"
            className="z-0 absolute md:block hidden right-0 h-screen"
         />
         <div className="muzieknootjes absolute md:bottom-96 bottom-80 z-50 right-6 md:right-32">
            <div className="noot-1 text-red-500">&#9835; &#9833;</div>
            <div className="noot-2 text-orange-400">&#9833;</div>
            <div className="noot-3  text-blue-700">&#9839; &#9834;</div>
            <div className="noot-4 text-blue-500">&#9835; &#9833;</div>
            <div className="noot-5  text-orange-500">&#9834;</div>
         </div>
         <div className="relative flex h-screen  z-30 w-full items-center justify-start">
            <div className="md:w-1/2 z-30 md:pl-20 md:pt-10 pt-10 px-6 md:pr-10">
               <h1 className="   md:pr-16 font-bold text-2xl   text-red-400 md:text-6xl">
                  BOOST YOUR
                  <span className="text-PrimaryBlue"> BABY&apos;s</span> BRAIN &
                  <span className="text-PrimaryBlue"> LEARNING POTENTIAL</span>
               </h1>

               <img
                  src="/herobgMobile.png"
                  className="z-0 pt-6 top-0 md:hidden  "
               />
               <h1 className="my-6 md:my-12 text-gray-700 text-sm  md:text-lg  md:pr-8 ">
                  We flash the image of the notes at the exact moment they are
                  being played in almost 300 amazing music videos. Each
                  composition is dedicated to one of the basic 36 notes, their
                  minor and major chords. Children learn by simple repetition
                  through age 7. They cannot - not learn to associate the pitch
                  to the notes with enough exposure. We expect this process to
                  take 12-18 months of regular use.
               </h1>

               <div className="md:flex justify-start">
                  {/* <div
                     onClick={openModal}
                     className="flex items-center justify-between rounded text-sm md:text-xl pl-2 py-2 pr-2 bg-red-500 text-white cursor-pointer"
                  >
                     <a
                        href="#contactme"
                        className="  no-underline"
                     >
                        Learn How This Works
                     </a>
                     <div className="p-1 text-sm md:text-2xl ml-3 text-red-500 rounded-md bg-white">
                        <FaCirclePlay />
                     </div>
                  </div> */}

                  <div
                     onClick={openModal}
                     className="flex items-center justify-between rounded-3xl text-sm md:text-lg px-3 py-2  bg-PrimaryBlue hover:bg-blue-600 text-white cursor-pointer group duration-700"
                  >
                     <a
                        href="#contactme"
                        className="  no-underline"
                     >
                        Watch How This Works
                     </a>
                     <div className="p-1 text-sm md:text-xl ml-3 text-PrimaryBlue duration-700 group-hover:text-blue-600 rounded-full bg-white">
                        <FaCirclePlay />
                     </div>
                  </div>

                  <div className="flex items-center md:ml-8 mt-4 md:mt-0 justify-between rounded-3xl text-sm md:text-lg  px-3 py-2 border-2 border-PrimaryBlue hover:border-blue-600 text-PrimaryBlue hover:text-blue-600 cursor-pointer group duration-700">
                     <a
                        href="#contactme"
                        className="  no-underline"
                     >
                        Learn More
                     </a>

                     <div className="p-1 text-sm md:text-xl ml-3 text-white rounded-full bg-PrimaryBlue group-hover:bg-blue-600 duration-700">
                        <IoArrowForward />
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <VideoModal
            isOpen={isOpen}
            onClose={closeModal}
         />
      </section>
   );
}
