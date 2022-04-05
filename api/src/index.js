const express = require('express');
const mongoose = require('mongoose')
require('./helpers/db')
const {host, port, db} = require('./configuration')

const kittySchema = new mongoose.Schema({
    name: String
  });


const app = express()

app.get('/test', (req, res) => {
    res.send('TESK OK!!!')
})

app.listen(port, () => {
    console.log(`Started api service on port: ${port}`);
    console.log(`On host ${host}`);
    console.log(`Our database ${db}`);


    const Kitten = mongoose.model('Kitten', kittySchema);

    const silence = new Kitten({ name: 'Silence' });

    silence.save()

    console.log(silence); 
})

