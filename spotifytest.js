const fs = require('fs');
const mysql = require('mysql');

function ReadRecents(filename) {
    let rawdata = fs.readFileSync(filename);

    let recentPlays = JSON.parse(rawdata);
    return recentPlays;
}

var con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "harry4657",
    database: "spotify"
});

con.connect(function(err) {
    if (err) throw err;
});

function addToDatabase(play) {
    con.query("INSERT INTO plays (trackName, artistName, endTime, msPlayed) VALUES ( '" + play.trackName + "', '" + play.artistName + "', '" + play.endTime + "', " + play.msPlayed + ")", function (err, result, fields) {
        if (err) throw err;
    });
}

// replaces all single quotes with sql escaped single quotes
function formatString(str) {
   return str.replace( /'/g , '\'\'' );
}

function main() {
    var recentPlays = ReadRecents('./json/sample.json');
    for(i = 0; i < 20; i++) {
        recentPlays[i].trackName = formatString(recentPlays[i].trackName);
        addToDatabase(recentPlays[i]);
    }
    con.end();
}

main();