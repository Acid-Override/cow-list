const express = require('express');
const path = require('path');
const { createCow, readCow, updateCow, deleteCow } = require ('./model');

const PORT = 3000;
const app = express();


app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.urlencoded({ extended: true }));

app.get('/api/cows', (req, res) => {
  console.log(req.body)
  //res.send('Hello from the server! \n');
  readCow((err, results) => {
    if (err) {
      console.log("[app.get] server/index.js ERROR: ", err)
      res.send(err)
    } else {
      res.send(results)
    }
  })
})

app.post('/api/cows', (req, res) => {
  console.log(req.body)
  let params = [req.body.name, req.body.description]
  createCow(params, (err, results) => {
    if (err) {
      console.log("[app.post] server/index.js ERROR: ", err)
      res.send(err);
    } else {
      console.log("[app.post] server/index.js SUCCESS: ", results);
      res.send(results)
    }
  })
})

app.listen(PORT, () => {
  console.log(`Server listening at localhost:${3000}!`);
});
