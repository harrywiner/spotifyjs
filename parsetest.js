const fs = require('fs');

function ReadRecents(filename) {
    let rawdata = fs.readFileSync(filename);

    let recentPlays = JSON.parse(rawdata);
    return recentPlays;
}

function main () {
    var recentPlays = ReadRecents('./sample.json');

    let count = 0;
    for (var i = 0; i <  recentPlays.length; i++) {
        if(recentPlays[i].trackName == "Althea - 2013 Remaster")
            count += recentPlays[i].msPlayed;
    }

    console.log(count + " ms");
}

main();