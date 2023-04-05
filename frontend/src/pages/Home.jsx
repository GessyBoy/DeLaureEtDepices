/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import expressAPI from "../services/expressAPI";

import Presentation from "../components/Presentation";
import QuiSommesNous from "../components/QuiSommesNous";

function ProduitsList() {
  const navigate = useNavigate();
  const [produits, setProduits] = useState([]);

  useEffect(() => {
    expressAPI
      .get(`/Produits`)
      .then((res) => setProduits(res.data))
      .catch((err) => console.error(err));
  }, []);

  const deuxPremiersProduits = produits.slice(0, 2);

  return (
    <div className="px-4 py-8">
      <div className="flex justify-center w-full">
        <Presentation className="w-full filter hover:blur-sm" />
      </div>
      <h1 className="text-3xl font-bold mb-4">En vedette : </h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {deuxPremiersProduits.map((produit) => (
          <li
            className="bg-white shadow rounded-lg transition duration-300 transform hover:-translate-y-1 hover:scale-105"
            key={produit.ID}
            onClick={() => navigate(`/Produits`)}
          >
            <img
              className="w-full h-64 object-cover rounded-t-lg transition duration-300 opacity-100 hover:opacity-30 cursor-pointer"
              src={produit.Image}
              alt={produit.description}
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{produit.description}</h2>
              <p className="text-gray-800 text-lg mb-4">{produit.prix}€</p>
            </div>
          </li>
        ))}
      </ul>
      <br />
      <br />
      <QuiSommesNous />
    </div>
  );
}

export default ProduitsList;
