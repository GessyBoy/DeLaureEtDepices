-- Active: 1679479812400@@127.0.0.1@3306@DL

DROP TABLE IF EXISTS `item`;
CREATE TABLE `item` (
  `id` int(11) UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

INSERT INTO `item` (`title`) VALUES ('Stuff'), ('Doodads');

DROP TABLE IF EXISTS `Users`;
CREATE TABLE `Users` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `mail` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `Users` (`mail`, `password`) VALUES
  ('utilisateur1@mail.com', 'motdepasse1'),
  ('utilisateur2@mail.com', 'motdepasse2'),
  ('utilisateur3@mail.com', 'motdepasse3');

DROP TABLE IF EXISTS `Commandes`;
CREATE TABLE `Commandes` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `Users_ID` INT NOT NULL,
  PRIMARY KEY (`ID`),
  FOREIGN KEY (`Users_ID`) REFERENCES `Users`(`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `Commandes` (`Users_ID`) VALUES
  (1),
  (2),
  (3);


DROP TABLE IF EXISTS `Produits`;
CREATE TABLE `Produits` (
  `ID` INT NOT NULL AUTO_INCREMENT,
  `Image` VARCHAR(255),
  `description` TEXT,
  `prix` DECIMAL(10, 2) NOT NULL,
  PRIMARY KEY (`ID`)
)ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `Produits` (`Image`, `description`, `prix`) VALUES
  ('produit1.jpg', 'Description du produit 1', 19.99),
  ('produit2.jpg', 'Description du produit 2', 29.99),
  ('produit3.jpg', 'Description du produit 3', 39.99);

DROP TABLE IF EXISTS `Commandes_Produits`;
CREATE TABLE `Commandes_Produits` (
  `Produits_ID` INT NOT NULL,
  `Commandes_ID` INT NOT NULL,
  PRIMARY KEY (`Produits_ID`, `Commandes_ID`),
  FOREIGN KEY (`Produits_ID`) REFERENCES `Produits`(`ID`),
  FOREIGN KEY (`Commandes_ID`) REFERENCES `Commandes`(`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `Commandes_Produits` (`Produits_ID`, `Commandes_ID`) VALUES
  (1, 1),
  (2, 2),
  (3, 3);