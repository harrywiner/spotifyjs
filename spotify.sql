CREATE DATABASE spotify;

USE spotify;

CREATE TABLE play
(
playID INT NOT NULL AUTO_INCREMENT,
trackName varchar (32),
artistName varchar (32),
endTime varchar (32),
msPlayed INT,
UNIQUE(playID)
);