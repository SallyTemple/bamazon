var mysql = require('promise-mysql');
var Table = require('cli-table');
var inquirer = require('inquirer');


//Database Connection
var connection = mysql.createConnection({
      host: 
      'local host',
      port: 3306,
      user: 'root',
      password: 'LordHelpMe777%',
      database: 'bamazon',
});


    this.table = new Table({
      head: ['Item ID', 'Product Name', 'Price', 'Stock Quantity'],
  });

  this.displayInventoryTable = function(results) {
        this.results = results;
        for (var i=0; i <this.results.length; i++) {
            this.table.push(
                [this.results[i].item_id, this.results[i].product_name, '$'+ this.results[i].price, this.results[i].stock_quantity] );
        }
        console.log('\n' + this.table.toString());
    };
    connection.connect(function (err) {
      if (err) throw err;
      expressShopping();
    });
    
//Ask the user what item he or she wants to purchase
var expressShopping = function() {
	var display = new availableItems();
	connection.query('SELECT * FROM products', function(err, results){
		display.displayInventoryTable(results);
		inventoryStock();
	});
}

var inventoryStock = function() {
		inquirer.prompt([{
		name: "id",
		type: "input",
		message: "What is the id of the product you want to purchase?",
      }, 

      {name: "quantity",
		type: "input",
		message: "How many unit of the product you want to purcahse?",

	}]).then(function(data) {
		connection.query('SELECT product_name, department_name, price, stock_quantity FROM products WHERE ?', {item_id: data.id}, function(err,res) {
		console.log('\n  Choose what you want to purchase ' + data.quantity + ' ' + res[0].product_name + ' ' + res[0].department_name + ' at $' + res[0].price + ' each'
			);
			if (res[0].stock_quantity >= data.quantity) {
				var productQuantity = res[0].stock_quantity - data.quantity;
				connection.query("UPDATE products SET ? WHERE ?", [
				{
					stock_quantity: productQuantity
                        }, 
                        {item_id: data.id
				}], function(err,res) {
					});	
				var amount = res[0].price * data.quantity;
				console.log('\n  Purchase completed, your bill is $' + amount.toFixed(2) + '\n');
				userStart();
					
			} else {
				userStart();
			}
		})
    });
}

var userStart = function() {
    inquirer.prompt({
        name: "action",
        type: "list",
        message: " Do you want to contine to shop?\n",
        choices: ["Yes", "No"]
    }).then(function(data) {
        switch(data.action) {
            case 'Yes':
                expressShopping();
            break
            case 'No':
            break;
        }
    })
};

userStart();

