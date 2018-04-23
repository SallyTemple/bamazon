var mysql = require('promise-mysql');
var Table = require('cli-table');
var inquirer = require('inquirer');

//Database Connection
var databaseConnection = mysql.createConnection({
host: "local host",
port:3306,
user:"root",
password:" ",
database: "bamazon",
});