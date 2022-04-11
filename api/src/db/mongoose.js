const mongoose = require('mongoose')
const {db} = require('../configuration')

mongoose.connect(`${db}`, {
    useNewUrlParser: true,
    useCreateIndex: true
})