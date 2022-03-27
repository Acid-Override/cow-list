//require mongoose
const mongoose = require('mongoose');
//OR ES6
//import mongoose from 'mongoose';

//Connecting to MongoDB
//define a connection

mongoose.connect('mongodb://localhost/cowsDB')
.then (results => {
  console.log('Connected to MongoDB')
})
  .catch(err => {
    console.log("Connection Error: ", error)
  })

//const { Schema } = mongoose;

const cowSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: false }
})

const Cow = mongoose.model("Cow", cowSchema)

let createCow = (params) => {
  console.log(params)
  const {name, description} = params
  const doc = new Cow(params)
  return Cow.updateOne({name: name}, doc, {upsert: true})
}

let readCow = () => {
  console.log("[readCow] database/index.js")
  return Cow.find()
}

let updateCow = (params) => {
  console.log("[updateCow] database/index.js")
  const { name, description } = params
  return Cow.updateOne({ name: name },
    {
      $set: {
        description: description
      }
    })
}

let deleteCow = (params) => {
  console.log("[deleteCow] database/index.js Params: ", params)
  return Cow.deleteOne(params)
  .then(results => {
    console.log(results)
  })
}

module.exports = {
  createCow,
  readCow,
  deleteCow,
  updateCow,
}