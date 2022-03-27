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

const { Schema } = mongoose;

const cowSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: false }
})

const Cow = mongoose.model("Cow", cowSchema)

let createCow = (params) => {
  console.log(params)
  const entry = new Cow(params)
  return entry.save()
    .then(results => {
      console.log("createCow Results: ", results)
    })
    .catch(err => {
      console.log(err)
    })
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
  return Cow.deleteOne({ params })
}

module.exports = {
  createCow,
  readCow,
  deleteCow,
  updateCow,
}