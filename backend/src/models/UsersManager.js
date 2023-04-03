const AbstractManager = require("./AbstractManager");

class UsersManager extends AbstractManager {
  constructor() {
    super({ table: "Users" });
  }

  insert(Users) {
    return this.database.query(
      `insert into ${this.table} (mail, password) values (?, ?)`,
      [Users.mail, Users.password]
    );
  }

  update(Users) {
    return this.database.query(
      `update ${this.table} set mail = ?, password = ? where id = ?`,
      [Users.mail, Users.password, Users.id]
    );
  }
}

module.exports = UsersManager;
