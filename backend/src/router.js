const express = require("express");

const router = express.Router();

const { hashPassword, verifyPassword, verifyToken, logout } = require("./auth");

const itemControllers = require("./controllers/itemControllers");
const commandesControllers = require("./controllers/commandesControllers");
const produitsControllers = require("./controllers/produitsControllers");
const usersControllers = require("./controllers/usersControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

router.get("/commandes", commandesControllers.browse);
router.get("/commandes/:id", commandesControllers.read);
router.put("/commandes/:id", commandesControllers.edit);
router.post("/commandes", commandesControllers.add);
router.delete("/commandes/:id", commandesControllers.destroy);

router.get("/Produits", produitsControllers.browse);
router.get("/Produits/:id", produitsControllers.read);
router.put("/Produits/:id", produitsControllers.edit);
router.post("/Produits", produitsControllers.add);
router.delete("/Produits/:id", produitsControllers.destroy);

// Protected routes
router.use(verifyToken);

router.post("/login", usersControllers.login, verifyPassword);
router.get("/logout", logout);
router.get("/Users", usersControllers.browse);
router.get("/Users/:id", usersControllers.read);
router.put("/Users/:id", hashPassword, verifyPassword, usersControllers.edit);
router.post("/Users", hashPassword, usersControllers.add);
router.delete(
  "/Users/:id",
  hashPassword,
  verifyPassword,
  usersControllers.destroy
);

module.exports = router;
