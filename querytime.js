const moment = require('moment');
const fs = require('fs');
const mysql = require('mysql');

var con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "harry4657",
    database: "spotify"
});

con.connect(function(err) {
    if (err) throw err;
});

var query = "SELECT endTime from plays;";

con.query(query, function(err, result, fields){
    if (err) throw err;

    console.log(result[1].endTime);

    const endTime = moment(result[0].endTime, 'YYY-MM-DD hh:mm');
    console.log(endTime.format());
});

con.end();