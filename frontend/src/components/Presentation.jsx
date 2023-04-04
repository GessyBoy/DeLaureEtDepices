import React from "react";
import epices from "../assets/epices.jpg";

function Presentation() {
  return (
    <div className="relative">
      <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-xl hidden group-hover:block">
        De Laure et d'Épices
      </h1>
      <img
        src={epices}
        alt="épices"
        className="w-full h-3/4 hover:filter hover:blur-sm"
      />
    </div>
  );
}

export default Presentation;
