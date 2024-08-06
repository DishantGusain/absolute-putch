import Hero from "./Components/Hero";
import NavBar from "./Components/NavBar";

export default function Home() {
   return (
      <main className="">
         <NavBar />
         <Hero />
         <div className="h-screen w-full flex items-center justify-center text-center text-3xl md:text-5xl">
            Work In Progress
         </div>
      </main>
   );
}
