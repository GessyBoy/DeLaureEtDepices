import { useState, useEffect } from "react";

function Panier() {
  const [selection, setSelection] = useState([]);

  useEffect(() => {
    setSelection([]);
  }, []);

  const handleQuantiteChange = (produit, event) => {
    const newSelection = [...selection];
    const index = newSelection.findIndex((p) => p.ID === produit.ID);
    newSelection[index] = {
      ...produit,
      quantite: parseInt(event.target.value, 10),
    };
    setSelection(newSelection);
  };

  const getTotal = () => {
    return selection.reduce((total, produit) => {
      return total + produit.prix * produit.quantite;
    }, 0);
  };

  const removeFromSelection = (produit) => {
    const newSelection = selection.filter((p) => p.ID !== produit.ID);
    setSelection(newSelection);
  };

  return (
    <div className="bg-gray-100 py-8">
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-2xl font-bold mb-8">Panier</h1>
        {selection.length === 0 ? (
          <p>Votre panier est vide.</p>
        ) : (
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {selection.map((produit) => (
              <li className="bg-white shadow rounded-lg" key={produit.ID}>
                <img
                  className="w-full h-40 object-cover rounded-t-lg"
                  src={produit.Image}
                  alt={produit.description}
                />
                <div className="p-4">
                  <h2 className="text-xl font-bold mb-2">
                    {produit.description}
                  </h2>
                  <p className="text-gray-800 text-lg mb-4">
                    {produit.prix}€ x{" "}
                    <input
                      type="number"
                      min="1"
                      value={produit.quantite}
                      onChange={(event) => handleQuantiteChange(produit, event)}
                      className="border border-gray-500 rounded p-1 w-16 inline-block"
                    />{" "}
                    = {produit.prix * produit.quantite}€
                  </p>
                  <button
                    type="button"
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => removeFromSelection(produit)}
                  >
                    Retirer du panier
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
        {selection.length > 0 && (
          <div className="mt-8 text-right">
            <p className="text-lg font-bold">Total : {getTotal()}€</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Panier;
