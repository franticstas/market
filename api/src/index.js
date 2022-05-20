const express = require('express');
const mongoose = require('mongoose')
const {host, port, db} = require('./configuration')
const userRouter = require('./routers/user')
const productRouter = require('./routers/product')
const categoryRouter = require('./routers/category')
const subCategoryRouter = require('./routers/subcategory')
const User = require('./models/user')

const app = express()

app.use(express.json())
app.use(userRouter, productRouter, categoryRouter, subCategoryRouter)

app.use('/uploads', express.static('uploads'));

app.listen(port, () => {
    console.log(`Started api service on port: ${port}`);
    console.log(`On host ${host}`);
    console.log(`Our database ${db}`);
})

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(db);
}

const initUser = {
  name: 'admin',
  email: 'admin@market.ru',
  password: '123456'
}

const createAdmin = async () => {
  const checkUser = await User.findOne({ name: 'admin'})
  if (!checkUser) {
    const user = new User(initUser)
    try {
      await user.save()
    } catch(e) {
      console.log(e);
      
    }
  }
}

createAdmin()