const mysql = require('mysql')

const connection = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'2020',
  database:'jaunecongo'
})

connection.connect((err)=>{
   if(err){console.log(err.message)}
   console.log('Connexion à la base de données établie!');
 })

 module.exports = connection
