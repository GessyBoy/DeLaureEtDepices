import React from "react";
import epices from "../assets/epices.jpg";

function Presentation() {
  return (
    <div className="relative">
      <img
        src={epices}
        alt="épices"
        className="w-full h-3/4 hover:filter-blur-sm"
      />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100">
        <div className="bg-gray-600 bg-opacity-50 rounded-lg p-8">
          <h1 className="text-or  text-7xl font-bold bg-gradient-to-r from-red-400 via-yellow-400 to-green-400 bg-clip-text text-transparent">
            De Laure et d'épices
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Presentation;
