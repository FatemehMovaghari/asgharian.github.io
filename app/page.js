import Navigation from "./components/navigation";
import VillaSVG from "./components/VillaSVG";
import Image from "next/image";
import "./globals.css";

export default function Home() {
  return (
    <>
      {/* Main content in container */}
      <div className="container mx-auto">
        <div className="grid grid-cols-12 h-screen relative">
          {/* Left - Navigation */}
          <div className="col-span-7 bg-transparent">
            <div className="p-4">
              <div className="logo-animate">
                <Image
                  src="/Logo.png"
                  alt="Logo"
                  width={100}
                  height={59}
                  priority
                />
              </div>
            </div>
            <Navigation />
          </div>

          {/* Right - Empty column (reserved for visual spacing) */}
          <div className="col-span-5" />
        </div>
      </div>

      {/* 🟥 VillaContainer outside the container */}
      <div className="fixed top-0 right-0 left-auto h-screen ">
        <div className="villaContainer w-full h-full">
          <VillaSVG />
        </div>
      </div>
    </>
  );
}
