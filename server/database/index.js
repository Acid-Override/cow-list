//require mongoose
const mongoose = require('mongoose');
//OR ES6
//import mongoose from 'mongoose';

//mongosh
//use cowsDB

//Connecting to MongoDB
//define a connection

mongoose.connect('mongodb://localhost/cowsDB')
.catch(err => {
  console.log("Connection Error: ", error)
})

const { Schema } = mongoose;

const cowSchema = new Schema({
  name : {type: String, required: true},
  description: {type: String, required: false}
})



const Cow = mongoose.model("Cow", cowSchema)

let createCow = (params) => {
  console.log(params)
  const entry = new Cow(params)
  return entry.save()
  .then(results => {
    console.log("createCow Results: ", results)
  })
  .catch( err => {
    console.log(err)
  })

}

let readCow = () => {
  console.log("[readCow] database/index.js")
  return Cow.find()
}




module.exports = {
  createCow,
  readCow,
}