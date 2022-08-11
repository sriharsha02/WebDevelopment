const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const loginRoute = require('./Routes/login')
const messageRoute = require('./Routes/message');

app.use(bodyParser.urlencoded({extended : false}))


app.use(loginRoute);
app.use(messageRoute);
app.use((req, res, next) => {
  res.status(404).send('<h1>The page you are looking cannot be found</h1>')
})

app.listen(5000);