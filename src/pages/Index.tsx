import { Link } from "react-router-dom";
import backgroundImage from "@/assets/2bme-background.png";

const Index = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <img
        src={backgroundImage}
        alt="2BME Studio"
        className="w-full h-full object-cover"
      />

      {/* Floating Blog Button - positioned above the bookshelf (left side) */}
      <Link
        to="/blog"
        className="group absolute left-[3%] top-[38%] transition-transform duration-300 hover:scale-110"
      >
        <div className="bg-black/80 border-4 border-white px-6 py-3 group-hover:bg-white transition-all duration-300 cursor-pointer">
          <span 
            className="text-white group-hover:text-black font-bold text-xl tracking-wider transition-colors duration-300" 
            style={{ fontFamily: "'Press Start 2P', monospace" }}
          >
            BLOG
          </span>
        </div>
      </Link>

      {/* Floating Merch Button - positioned above the clothing rack (right side) */}
      <Link
        to="/merch"
        className="group absolute right-[3%] top-[45%] transition-transform duration-300 hover:scale-110"
      >
        <div className="bg-black/80 border-4 border-white px-6 py-3 group-hover:bg-white transition-all duration-300 cursor-pointer">
          <span 
            className="text-white group-hover:text-black font-bold text-xl tracking-wider transition-colors duration-300" 
            style={{ fontFamily: "'Press Start 2P', monospace" }}
          >
            MERCH
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Index;
