import React from "react";

import facedook from "../assets/facebook.png";
import instafram from "../assets/instagram.png";
import tok from "../assets/tic-tac.png";

function Footer() {
  return (
    <footer className="bg-black text-white">
      <h1 className="text-center">Retrouvez-nous sur les réseaux sociaux :</h1>
      <div className="grid grid-cols-3 gap-8 mt-8">
        <a href="https://www.facebook.com" className="flex justify-center">
          <img
            src={facedook}
            alt="facebook"
            className="h-16 w-16 rounded-full border-none"
          />
        </a>
        <a href="https://www.instagram.com" className="flex justify-center">
          <img
            src={instafram}
            alt="instagram"
            className="h-16 w-16 rounded-full border-none"
          />
        </a>
        <a href="https://www.tiktok.com" className="flex justify-center">
          <img
            src={tok}
            alt="tik-tak"
            className="h-16 w-16 rounded-full border-none"
          />
        </a>
      </div>
      <p className="text-right text-or">&copy; 2023 De Laure et d'épices</p>
    </footer>
  );
}

export default Footer;
