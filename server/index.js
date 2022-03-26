const express = require('express');
const path = require('path');
//const { createCow, readCow, updateCow, deleteCow } = require ('./model');
const { sequelize, cows } = require ('./models/index.js');

const PORT = 3000;
const app = express();


app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(express.urlencoded({ extended: true }));

app.get('/api/cows', async (req, res) => {
  console.log(req.body)
  try{
    const data = await cows.findAll();
    return res.send(data)

  } catch (err) {
    return res.status(500).send(err)
  }
})

app.post('/api/cows', async (req, res) => {
  const { name, description } = req.body
  console.log(req.body)
  let params = [name, description]
  try{
    const cow = await cows.create({name, description})
    console.log("[app.post] server/index.js COW: ")
    return res.send(cow)
  } catch(err) {
    console.log("[app.post] server/index.js ERROR: ", err)
    return res.status(500).send(err)
  }
  res.send(params)
  // createCow(params, (err, results) => {
  //   if (err) {
  //     console.log("[app.post] server/index.js ERROR: ", err)
  //     res.send(err);
  //   } else {
  //     console.log("[app.post] server/index.js SUCCESS: ", results);
  //     res.send(results)
  //   }
  // })
})



app.listen(PORT, async () => {
  console.log(`Server listening at localhost:${3000}!`);
  await sequelize.authenticate({force: true})
});
