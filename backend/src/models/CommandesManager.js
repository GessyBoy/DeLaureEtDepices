const AbstractManager = require("./AbstractManager");

class CommandesManager extends AbstractManager {
  constructor() {
    super({ table: "Commandes" });
  }

  insert(Commandes) {
    return this.database.query(
      `insert into ${this.table} (Users_ID) values (?)`,
      [Commandes.userID]
    );
  }

  update(Commandes) {
    return this.database.query(
      `update ${this.table} set Users_ID = ? where id = ?`,
      [Commandes.userID, Commandes.id]
    );
  }
}

module.exports = CommandesManager;
