const AbstractManager = require("./AbstractManager");

class ProduitsManager extends AbstractManager {
  constructor() {
    super({ table: "Produits" });
  }

  insert(Produits) {
    return this.database.query(
      `insert into ${this.table} (Image, description, prix) values (?, ?, ?)`,
      [Produits.Image, Produits.description, Produits.prix]
    );
  }

  update(Produits) {
    return this.database.query(
      `update ${this.table} set Image = ?, description = ?, prix = ? where id = ?`,
      [Produits.Image, Produits.description, Produits.prix, Produits.id]
    );
  }
}

module.exports = ProduitsManager;
