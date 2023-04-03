const express = require("express");

const router = express.Router();

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

router.get("/Users", usersControllers.browse);
router.get("/Users/:id", usersControllers.read);
router.put("/Users/:id", usersControllers.edit);
router.post("/Users", usersControllers.add);
router.delete("/Users/:id", usersControllers.destroy);

module.exports = router;
