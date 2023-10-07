const mysql = require('mysql')

const connect = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'Amir@123',
  database:"registers"
});
 
connect.connect(function(err){
  if(err)
  {
    console.log("error not connected");
  }
  else
  {
    console.log("connected")
  }
});