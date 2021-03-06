DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
	id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(30) NOT NULL,
    devoured BOOLEAN NOT NULL DEFAULT FALSE,
    PRIMARY KEY (id)
);

INSERT INTO burgers (burger_name)
VALUES ("Cheese Burger"),
("BLT");

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'localpass'
flush privileges;
