"use client"

import { useState } from 'react';
import { FaCirclePlay } from "react-icons/fa6";
import VideoModal from "./VideoModal";

export default function Hero() {
   const [isOpen, setOpen] = useState(false);

   // Function to open the modal
   const openModal = () => setOpen(true);

   // Function to close the modal
   const closeModal = () => setOpen(false);

   return (
      <section
         id="hero"
         className="relative bg-[#F8F9FB] "
      >
         <img
            src="/herobg.png"
            className="z-0 absolute right-0 h-screen"
         />

         <div className="relative flex h-screen z-30 w-full items-center justify-start">
            <div className="w-1/2 pl-20 pr-10">
               <h1 className="   md:pr-16 font-bold text-3xl   text-textprimary md:text-6xl">
                  BOOST YOUR
                  <span className="text-[#3295DC]"> BABY's</span> BRAIN &
                  <span className="text-[#3295DC]"> LEARNING POTENTIAL</span>
               </h1>
               <h1 className="my-6 md:my-10  text-base  md:text-lg  pr-8 md:line-clamp-none line-clamp-3">
                  We flash the image of the notes at the exact moment they are
                  being played in almost 300 amazing music videos. Each
                  composition is dedicated to one of the basic 36 notes, their
                  minor and major chords. Children learn by simple repetition
                  through age 7. They cannot - not learn to associate the pitch
                  to the notes with enough exposure. We expect this process to
                  take 12-18 months of regular use.
               </h1>

               <div className="flex justify-center md:justify-start">
                  <div
                     onClick={openModal}
                     className="flex items-center justify-between rounded-md text-base md:text-xl pl-2 py-2 pr-2 bg-[#3295DC] text-white cursor-pointer"
                  >
                     <a
                        href="#contactme"
                        className="  no-underline"
                     >
                        Watch The Whole Process
                     </a>
                     <div className="p-1 text-2xl ml-3 text-[#3295DC] rounded-md bg-white">
                        <FaCirclePlay />
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
