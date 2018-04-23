use bamazon;

insert into products(
product_name,
department_name,
price,
stock_quantity
)values

("Shoes", "Clothing", 34, 20),
("Flatscreen TV", "Electronics", 2500, 15),
("Pampers", "Baby", 15, 40),
("Dress Shirt", "Men", 40, 150),
("Skirts", "Women", 20, 55),
("Electric Dryer", "Appliances", 845, 25),
("Laptop", "Computers", 1500, 63),
("Inflatable Pool", "Outdoor", 50, 27),
("Keyboard Piano", "Musical Instrument", 500, 10),
("Microsoft Office", "Software", 140, 61),
("Flour", "Grocery", 5, 42),
("Shampoo", "Personal Care", 8, 17);

use bamazon;

select * from products;
