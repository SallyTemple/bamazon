create database bamazon;

use bamazon;

create table products(
item_id INT(11) AUTO_INCREMENT NOT NULL,
product_name varchar(100) NULL,
department_name varchar(100) NULL,
price decimal (10, 4) NULL,
stock_quantity DECIMAL (10, 4) NULL,
PRIMARY KEY (item_id)
);