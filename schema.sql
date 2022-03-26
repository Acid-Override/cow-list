-- ATTN WINDOWS USERS: Some of you might have an easier time just copying and pasting the lines below in to your mysql shell

CREATE DATABASE cowsDB;

USE cowsDB;

CREATE TABLE cows (
  id int NOT NULL AUTO_INCREMENT,
  name VARCHAR (40) NOT NULL,
  description VARCHAR(250),
  PRIMARY KEY (id)
);

-- YOUR CODE GOES HERE
-- CREATE YOUR DATABASE
-- CREATE YOUR TABLES
-- ADD RECORDS TO YOUR TABLE

