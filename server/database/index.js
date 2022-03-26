const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'cowsDB'
});

connection.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Connected to MySQL!')
  }
});

// Your Database Queries Here!!

// connection.query("Select * From cows", (err, results) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("QUERY RESULTS [database/index.js]", results);
//   }
// })



// Don't forget to export your functions!
module.exports = {
  connection,

};
