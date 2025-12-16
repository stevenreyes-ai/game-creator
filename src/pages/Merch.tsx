import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Merch = () => {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white p-8">
      {/* Back Button */}
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-white hover:text-gray-300 transition-colors mb-8"
        style={{ fontFamily: "'Press Start 2P', monospace" }}
      >
        <ArrowLeft className="w-4 h-4" />
        <span className="text-sm">VOLVER</span>
      </Link>

      {/* Header */}
      <h1
        className="text-4xl font-bold text-center mb-12"
        style={{ fontFamily: "'Press Start 2P', monospace" }}
      >
        MERCH
      </h1>

      {/* Merch Products Placeholder */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-[#2a2a2a] border-4 border-white p-6 hover:bg-[#3a3a3a] transition-colors text-center">
          <div className="w-full h-48 bg-[#3a3a3a] mb-4 flex items-center justify-center">
            <span className="text-gray-500">Imagen</span>
          </div>
          <h2 className="text-lg mb-2" style={{ fontFamily: "'Press Start 2P', monospace" }}>
            Próximamente
          </h2>
          <p className="text-gray-400 text-sm">
            Nueva colección llegando pronto...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Merch;
