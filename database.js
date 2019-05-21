const fs = require("fs");
const path = require("path");
const sqlite3 = require("sqlite3").verbose();

var DB_PATH = path.resolve("database.db");
var DB_SQL_PATH = path.resolve("mysql.sql");

//console.log(DB_PATH);
//console.log(DB_SQL_PATH);

// implemeting the database schema, change mySQL.sql for changing database schema
var initSQL = fs.readFileSync(DB_SQL_PATH, "utf-8");
var db;
//console.log(initSQL)

db = new sqlite3.Database(DB_PATH);

/*db.run('CREATE TABLE IF NOT EXISTS Attendance(id INTEGER PRIMARY KEY,name VARCHAR(200), present CHAR(2))');

  db.close();*/

// Open the database in memory for reading and writing
// Depending upon user this function will open database as either read only or both read and writeable
function openDB(isStaff) {
  if (isStaff) {
    db = new sqlite3.Database(DB_PATH, err => {
      if (err) return console.error(err.message);
      console.log("Connected to the database");
    });
  } else {
    // Open the database in memory for reading only
    db = new sqlite3.Database(DB_PATH, sqlite3.OPEN_READONLY, err => {
      if (err) return console.error(err.message);
      console.log("Connected to the database");
    });
  }
}

openDB("staff");

// inititalizing the table schema
db.serialize(function() {
  db.run(initSQL);
});

// inserting data into the table
/*var insertQuery = `INSERT INTO Attendance(id, StudentName, Present)
          VALUES(15110721, "Gurkirat Gill", "T"),
                (15110723, "Jayush Chawla", "F"),
                (15110737, "Sandeep Singh", "T")`;

db.serialize(() => {
  // Queries scheduled here will be serialized.
    db.run(insertQuery).each(`SELECT * FROM Attendance WHERE Id = 15110721`, (err, row) => {
      if (err){
        throw err;
      }
      console.log(row);
      //let totalCount = row.length - 2;
//      let presentCount = row.filter((value) => {
//      return value === 'T';
  //    }).length;
    //  let absentCount = totalCount - presentCount;
//      console.log(totalCount);
  //    console.log(presentCount);
    //  console.log(absentCount);      
    })
});
*/

// Querying the data from database

// var id = [15110721];
// getStudentById(id);
function getStudentById(id) {
  let query = `SELECT * FROM Attendance WHERE Id = ?`;
  db.serialize(() => {
    db.get(query, id, (err, row) => {
      if (err) {
        console.error(err);
      }
      console.log(row.Present);
    });
  });
}

// alter table to add new column for everyday attendance

function addColumnForAttendance(columnName) {
  let query = `Alter TABLE Attendance ADD COLUMN ${columnName} {type CHAR(4)}`;
  db.exec(query, err => {
    if (err) throw err;
  });
}

// Close the database connection
db.close(err => {
  if (err) console.error(err.message);
  console.log("Closed the database");
});
