const express = require('express');
const mongoose = require('mongoose')
const {host, port, db} = require('./configuration')
const userRouter = require('./routers/user')

const app = express()
app.use(express.json())
app.use('users/', userRouter)

app.get('/test', (req, res) => {
    res.send('TESK OK!!!')
})

app.listen(port, () => {
    console.log(`Started api service on port: ${port}`);
    console.log(`On host ${host}`);
    console.log(`Our database ${db}`);
})

