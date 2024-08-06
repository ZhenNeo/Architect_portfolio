import Image from "next/image";
import Navbar from "./components/navbar";
import Home_page from "./components/home";

export default function Home() {
  return (
    <main className="grid grid-cols-5">
      <div className="col-span-1 ">
        <Navbar />
      </div>
      <div className="col-span-4">
        <Home_page />
        
        
      </div>
    </main>
  );
}
