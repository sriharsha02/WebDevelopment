const express = require('express');
const sequelize = require('../util/database');
const User = require('../models/userTable')

const app = express()

app.post('/', async(req, res) =>{
  const name = req.body.name;
  const email = req.body.email;
  const saveData = User.build({
    name,
    email
  })
  await saveData.save()
  res.send("Data Sent");
})

