const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./Routes/admin');
const shopRoutes = require('./Routes/shop');
const contactRoutes = require('./Routes/contact')
const successRoutes = require('./Routes/success')

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use('/shop', shopRoutes);
app.use('/contact', contactRoutes);
app.use('/success', successRoutes)

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})



app.listen(3000);