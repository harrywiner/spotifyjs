CREATE DATABASE spotify;

USE spotify;

CREATE TABLE track
(
trackID INT NOT NULL AUTO_INCREMENT,
trackName varchar (32),
count INT,
artistName varchar (32)
);

CREATE TABLE play
(
trackID INT,
endTime varchar (32),
msPlayed INT
);