import { useState, useEffect } from "react";

import expressAPI from "../services/expressAPI";

function ProduitsList() {
  const [produits, setProduits] = useState([]);

  useEffect(() => {
    expressAPI
      .get(`/Produits`)
      .then((res) => setProduits(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Produits</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {produits.map((produit) => (
          <li className="bg-white shadow rounded-lg" key={produit.ID}>
            <img
              className="w-full h-64 object-cover rounded-t-lg"
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
    </div>
  );
}

export default ProduitsList;
