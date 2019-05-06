-- Drops db if it currently exists
DROP DATABASE IF EXISTS burgers_db;

-- Create the burgers_db database 
CREATE DATABASE burgers_db;

-- Specifies db for use
USE burgers_db;

-- Create the table tasks.
CREATE TABLE burgers (
    -- Numeric ID column which will increment its default value with each new row
    id INT NOT NULL AUTO_INCREMENT,

    -- Creates a string with the burger names that cannot contain a null value
    burger_name VARCHAR(255) NOT NULL,

    -- Creates a boolean stating if it was a burger that was eaten or not
    devoured BOOL DEFAULT false,

    -- Sets id as this table's primary key which means all data contained within it will be unique
    PRIMARY KEY (id)
);