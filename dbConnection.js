const mysql = require("mysql");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345",
  //name of database
  database: "gallery",    
});

con.connect((err) => {
  if (err) throw err;
  console.log("Connected to Database");
  //TODO: uncomment below code if databsase is not present and remove database line in the create connection
  //method's object argument.
   // con.query("CREATE DATABASE gallery", (err, result) => {
     // if (err) throw err;
       //console.log("Database created");
     //});

  //TODO: uncomment below code if table is not present
  const tableQuery = "CREATE TABLE gallery_images(img LONGTEXT)";
    //con.query(tableQuery, (err, res) => {
    // if (err) throw err;
      // console.log("Table created");
     //});
});

module.exports = con;
