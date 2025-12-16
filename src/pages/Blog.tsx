import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Blog = () => {
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
        BLOG
      </h1>

      {/* Blog Posts Placeholder */}
      <div className="max-w-4xl mx-auto grid gap-8">
        <div className="bg-[#2a2a2a] border-4 border-white p-6 hover:bg-[#3a3a3a] transition-colors">
          <h2 className="text-xl mb-4" style={{ fontFamily: "'Press Start 2P', monospace" }}>
            Próximamente...
          </h2>
          <p className="text-gray-400">
            Aquí encontrarás las últimas noticias, actualizaciones y contenido exclusivo de 2BME.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
