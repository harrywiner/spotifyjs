const mysql = require('mysql');

var con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "harry4657",
    database: "test"
});

con.connect(function(err) {
    if (err) throw err;
    //con.query("INSERT INTO people (name, age) VALUES ('Janet', 21)", function (err, result, fields) {

    var sql = "select * from people where name = ?;";
    var inserts = ['Harry'];

    sql = con.format(sql, inserts);
    
    con.query(sql, function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        con.end();
    });
});

