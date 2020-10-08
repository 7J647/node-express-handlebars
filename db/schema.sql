CREATE DATABASE burgerdb;

use burgerdb;

create table burgers
(
    id int NOT NULL AUTO_INCREMENT,
    name VARCHAR(255),
    devoured BOOLEAN,
    PRIMARY KEY (id)
);
