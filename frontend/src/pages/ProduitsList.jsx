import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import expressAPI from "../services/expressAPI";

function ProduitsList() {
  const [produits, setProduits] = useState([]);
  const [selection, setSelection] = useState([]);

  useEffect(() => {
    expressAPI
      .get(`/Produits`)
      .then((res) => setProduits(res.data))
      .catch((err) => console.error(err));
  }, []);

  const toggleSelection = (produit, quantite) => {
    const index = selection.findIndex((p) => p.ID === produit.ID);
    if (index === -1) {
      setSelection([...selection, { ...produit, quantite }]);
    } else {
      setSelection([
        ...selection.slice(0, index),
        ...selection.slice(index + 1),
      ]);
    }
  };

  const handleChangeQuantite = (produit, event) => {
    toggleSelection(produit, event.target.value);
  };

  const getPrixTotal = (produit) => {
    const quantite = selection.find((p) => p.ID === produit.ID)?.quantite || 0;
    return quantite * produit.prix;
  };

  return (
    <div className="px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Produits</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {produits.map((produit) => (
          <li className="bg-white shadow rounded-lg" key={produit.ID}>
            <img
              className="w-full h-64 object-cover rounded-t-lg transition duration-300 opacity-100 hover:opacity-30 cursor-pointer"
              src={produit.Image}
              alt={produit.description}
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{produit.description}</h2>
              <p className="text-gray-800 text-lg mb-4">
                {getPrixTotal(produit)}€ ({produit.prix}€/unité)
              </p>
              <div className="flex items-center">
                <label htmlFor={`quantite-${produit.ID}`} className="mr-2">
                  Quantité :
                </label>
                <select
                  id={`quantite-${produit.ID}`}
                  value={
                    selection.findIndex((p) => p.ID === produit.ID) !== -1
                      ? selection.find((p) => p.ID === produit.ID).quantite
                      : 0
                  }
                  onChange={(event) => handleChangeQuantite(produit, event)}
                  className="border border-gray-500 rounded p-1"
                >
                  {[...Array(10).keys()].map((i) => (
                    <option key={i} value={i}>
                      {i}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mt-2">
                <button
                  type="button"
                  className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${
                    selection.findIndex((p) => p.ID === produit.ID) !== -1
                      ? "bg-blue-700"
                      : ""
                  }`}
                  onClick={() => toggleSelection(produit)}
                >
                  {selection.findIndex((p) => p.ID === produit.ID) !== -1
                    ? "Annuler"
                    : "Ajouter au panier"}
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="fixed top-0 right-0 mt-4 mr-4">
        <Link
          to={{
            pathname: "/panier",
            state: { produits: selection },
          }}
          className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ${
            selection.length === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={selection.length === 0}
        >
          Aller au panier ({selection.length} produit
          {selection.length > 1 ? "s" : ""})
        </Link>
      </div>
    </div>
  );
}

export default ProduitsList;
