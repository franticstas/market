const express = require('express')
const router = express.Router()
const User = require('../models/user')

router.post('/users', async (req, res) => {
    const user = new User(req.body)

    console.log('POST users', req.body);
    try {
        await user.save()
        res.status(201).send(user)
    } catch (e) {
        console.log('ERROR');
        res.status(400).send(e)
    }
})

router.get('/test', (req, res) => {
    res.send('TESK OK!!!')
})

module.exports = router