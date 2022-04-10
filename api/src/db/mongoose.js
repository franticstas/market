const mongoose = require('mongoose')
const {db} = require('../configuration')

mongoose.connect('db/market-api', {
    useNewUrlParser: true,
    useCreateIndex: true
})