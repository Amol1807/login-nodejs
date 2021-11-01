const mysql=require("mysql");


var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: 'crudapp',

});

db.connect((err) =>{
  if (err) throw err;
  console.log("Connected!");
});

  module.exports=db;  