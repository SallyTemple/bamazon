var mysql = require('promise-mysql');
var Table = require('cli-table');
var inquirer = require('inquirer');

//Database Connection
var databaseConnection = mysql.createConnection({
host: "local host",
port:3306,
user:"root",
password:"",
database: "bamazon",
});

connection.connect(function (err) {
	if (err) throw err;
	console.log("Error connecting to database");
      displayProducts();
});

//Ask the user what item he or she wants to purchase

function displayProducts() {
      inquirer.prompt([{
            name:"id",
            type:"input",
            message:"What is the id of the product you want to purchase?"
      },
      {name:"quantity",
      type:"input",
      message:"How many unit of the product you want to buy?"

      }]).then function(data){
            connection.connect
      })
}