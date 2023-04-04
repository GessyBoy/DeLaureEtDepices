// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PanierCommande from "./pages/PanierCommande";
import ProduitsList from "./pages/ProduitsList";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/panier" element={<PanierCommande />} />
          <Route path="/produits" element={<ProduitsList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
