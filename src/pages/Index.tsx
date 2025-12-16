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
        className="absolute left-[8%] top-[35%] transform -translate-x-1/2"
      >
        <div className="bg-black/80 border-4 border-white px-6 py-3 hover:bg-white hover:text-black transition-all duration-300 cursor-pointer hover:scale-110">
          <span className="text-white hover:text-black font-bold text-xl tracking-wider" style={{ fontFamily: "'Press Start 2P', monospace" }}>
            BLOG
          </span>
        </div>
      </Link>

      {/* Floating Merch Button - positioned above the clothing rack (right side) */}
      <Link
        to="/merch"
        className="absolute right-[8%] top-[35%] transform translate-x-1/2"
      >
        <div className="bg-black/80 border-4 border-white px-6 py-3 hover:bg-white hover:text-black transition-all duration-300 cursor-pointer hover:scale-110">
          <span className="text-white hover:text-black font-bold text-xl tracking-wider" style={{ fontFamily: "'Press Start 2P', monospace" }}>
            MERCH
          </span>
        </div>
      </Link>
    </div>
  );
};

export default Index;
