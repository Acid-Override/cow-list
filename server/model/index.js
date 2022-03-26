//require connection from ../database/index.js to accss database
const db = require ('../database/').connection

//build out db querries here



//CRUD

//CREATE a new entry into database
let createCow = (params, callback) => {

  let queryStr = "INSERT INTO cows (name, description) VALUES (?, ?)"
  db.query(queryStr, params, (err, results) => {
    if (err) {
      console.log("[CREATE] /model/index.js ERROR: ", err);
      callback(err, null);
    } else {
      console.log("[CREATE] /model/index.js Success: ", results);
      callback(null, results);
    }
  })
}



//READ all from database
let readCow = (callback) => {
  let queryStr = "SELECT * FROM cows"
  db.query(queryStr, (err, results) => {
    if (err){
      console.log("[readCOW] model/index.js ERROR: ", err);
      callback(err, null)
    } else {
      console.log("[readCOW] model/index.js SUCCESS: ", results);
      callback(null, results)
    }
  })

}



//UPDATE one from the datablase
let updateCow = (params, callback) => {
  let queryStr = "UPDATE cows SET description=(?) WHERE name=(?)"
  db.query(queryStr, params, (err, results) => {
    if (err) {
      console.log("[updateCOW] model/index.js ERROR: ", err);
      callback(err, null);
    } else {
      console.log("[updateCOW] model/index.js SUCCESS: ", results);
      callback(null, results);
    }
  })
}








//DELETE one from databas
let deleteCow = (params, callback) => {
  let queryStr = "DELETE FROM cows WHERE name=(?)"
  db.query(queryStr, params, (err, results) => {
    if(err){
      console.log("[deleteCow] model/index.js ERROR: ", err);
      callback(err, null);
    } else {
      console.log("[deleteCow] model/index.js SUCCESS: ", results);
      callback(null, results);
    }
  })

}



module.exports = {
  createCow,
  readCow,
  updateCow,
  deleteCow,
}