DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (

  -- TABLE CODE TO GO HERE
id INTEGER(10) NOT NULL AUTO_INCREMENT,
burger_name VARCHAR(100) NOT NULL,
devoured BOOLEAN DEFAULT false,
PRIMARY KEY(id)
);