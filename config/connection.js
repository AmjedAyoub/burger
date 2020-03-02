// Set up MySQL connection.
var mysql = require("mysql");
var connection;
if(process.env.JAWSDB_URL){
    connection= mysql.createConnection({
        host: "j1r4n2ztuwm0bhh5.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
        port: 3306,
        user: "pocqob7qz51dmfly",
        password: "c82io6oobrfoy7nk",
        database: "k3etobtvdus0cg8n"
    });
}
else{
    connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Amjad.password",
    database: "burgers_db"
});
}

// Make connection.
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;