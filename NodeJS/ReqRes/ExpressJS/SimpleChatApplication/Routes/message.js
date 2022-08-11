const express = require('express');
const data = require('./data.txt');
const fs = require('fs');
const os = require('os')

const app = express.Router()


app.get('/', (req, res, next) => {
  res.send('<form action="/" onsubmit="document.getElementById(`userName`).value=localStorage.getItem(`userName`)" method="POST"><input id="message" name="message" type="text" placeholder="message"><input type="hidden" name="userName" id="userName"><button type="submit">Send Message</button></form>')
})
app.post('/',(req, res, next) => {
  content = `{${req.body.userName} : ${req.body.message}}`;
  fs.appendFile('./data.txt', content + os.EOL, err => {
    if(err){
      console.log(err)
    }
  })
  // console.log(content);
  // console.log(`${req.body.userName} : ${req.body.message}`)
  fs.readFile('./data.txt','utf8', (err, data) => {
    if(err){
      console.log(err);
      return;
    }
    console.log(data);

  })
  res.redirect('/');
})

module.exports = app;