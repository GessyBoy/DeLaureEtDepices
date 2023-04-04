const models = require("../models");

const browse = (req, res) => {
  models.Produits.findAll()
    .then(([result]) => {
      res.send(result);
    })
    .catch((e) => {
      console.error(e);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  models.Produits.find(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const edit = (req, res) => {
  const Produits = req.body;

  // TODO validations (length, format...)

  Produits.id = parseInt(req.params.id, 10);

  models.Commandes.update(Produits)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const add = (req, res) => {
  const Produits = req.body;

  // TODO validations (length, format...)

  models.Produits.insert(Produits)
    .then(([result]) => {
      res.location(`/Produits/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroy = (req, res) => {
  models.Produits.delete(req.params.id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404);
      } else {
        res.sendStatus(204);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = { browse, read, edit, add, destroy };
