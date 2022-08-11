const express = require('express');
const app = express.Router()

app.get('/login', (req, res, next)=>{
  res.send(
    '<form onsubmit="localStorage.setItem(`userName`, document.getElementById(`userName`).value)" action="/login" method="POST"><label for="username">Enter UserName:</label><br><input type="text" id="userName" name="username"><button type="submit">Submit</button></form>')
  ;
})
app.post('/login', (req, res, next) => {
  // console.log(req.body);
  res.redirect('/');
})

module.exports = app;