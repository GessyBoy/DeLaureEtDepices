import React from "react";
import epices from "../assets/epices.jpg";

function Presentation() {
  return (
    <div className="relative">
      <img
        src={epices}
        alt="épices"
        className="w-full h-3/4 hover:blur-sm transition-none"
      />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100">
        <p className="text-or  text-7xl font-bold bg-gradient-to-r from-red-400 via-yellow-400 to-green-400 bg-clip-text text-transparent hover:text-whitetext-lg border-2 border-black shadow-lg p-4">
          De Laure et d'épices
        </p>
      </div>
    </div>
  );
}

export default Presentation;
