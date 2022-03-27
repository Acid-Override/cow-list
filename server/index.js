const express = require('express');
const path = require('path');
const cors = require('cors');
const { createCow, readCow, updateCow, deleteCow } = require ('./database');

const PORT = 3000;
const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get('/api/cows', (req, res) => {
  readCow()
  .then(results => {
    res.send(results)
  })
  .catch(err => {
    res.send(err)
  })
})
app.post('/api/cows', (req, res) => {
  console.log(req.body)
  const {name, description} = req.body
  console.log(name, description)
  const params = {name: name, description: description}
  console.log(params)
  createCow(params)
  .then(results => {
    res.send(results)
  })
  .catch(err => {
    res.send(err)
  })
})
app.post('/api/cows/delete', (req, res) => {
  console.log('Server app.delete body', req.body)
  const {name} = req.body
  const params = {name: name};
  deleteCow(params)
  .then(results => {
    res.send(results)
  })
  .catch(err => {
    res.send(err)
  })
})
app.put('/api/cows', (req, res) => {
  const {name, description} = req.body
  const params = {name: name, description: description};
  updateCow(params)
  .then (results => {
    res.send(results)
  })
  .catch(err => {
    res.send(err)
  })
})
app.listen(PORT, () => {
  console.log(`Server listening at localhost:${3000}!`);
});
