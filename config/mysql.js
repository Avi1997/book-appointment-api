const mysql = require('mysql');

const mysqlConnection= mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Avinash123",
    database:"book_appointment",
    multipleStatements:true
});
mysqlConnection.connect((connectionError) => {
    if (!connectionError) {
        console.log("MYSQL Connected");
    } else {
        console.log("MY SQL Connection Failed",connectionError);
    }
});




module.exports =mysqlConnection;