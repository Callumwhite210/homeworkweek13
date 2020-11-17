DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burger (
	id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(30) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO burger (burger_name)
VALUES ("Cheese Burger"),
("BLT");