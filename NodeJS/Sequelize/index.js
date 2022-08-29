const express = require('express');
const sequelize = require('./util/database')
const bodyParser = require('body-parser');
const User = require('./models/userTable');
const cors = require('cors')


const userRouter = express.Router();

const app = express();

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// app.get('/', (req, res, next) => {
//   res.send('Sample Response')
// })

userRouter.post('/', async(req, res) =>{
  const saveData = User.build(req.body)
  await saveData.save()
  res.send(saveData);
})

userRouter.get('/', async(req, res) =>{
  const getData = await User.findAll();
  res.json(getData)
})

userRouter.put('/:id', (req, res) => {
  const updatedName = req.body.name;
  const updatedEmail = req.body.email;
  User.update(
    {
    name: updatedName,
    email: updatedEmail,
    },
    {
      where: {
        id: req.params.id,
      },
    }
  )
  // res.redirect('/')
})
userRouter.delete('/:id', (req, res) => {
  User.destroy(
    {
      where: {
        id: req.params.id,
      },
    }
  )
  // res.redirect('/')
})



sequelize.sync()
  .then(res => {
    app.listen(5000);
  })
  .catch(err => {
    console.log(err);
  })

  app.use('/user', userRouter);