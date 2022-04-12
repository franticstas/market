const mongoose = require('mongoose')
const {db} = require('../configuration')

console.log('MONGOOSE db ', db);
mongoose.connect(db)
        .catch(error => handleError(error));