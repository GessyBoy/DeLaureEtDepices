const models = require("../models");

const browse = (req, res) => {
  models.Users.findAll()
    .then(([result]) => {
      res.send(result);
    })
    .catch((e) => {
      console.error(e);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  models.Users.find(req.params.id)
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
  const Users = req.body;

  // TODO validations (length, format...)

  Users.id = parseInt(req.params.id, 10);

  models.Users.update(Users)
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
  const Users = req.body;

  // TODO validations (length, format...)

  models.Users.insert(Users)
    .then(([result]) => {
      res.location(`/Users/${result.insertId}`).sendStatus(201);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

const destroy = (req, res) => {
  models.Users.delete(req.params.id)
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
