const mongoose = require('mongoose')
const validator = require('validator')
const jwt = require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error('Email is invalid')
            }
        }
    },
    password: {
        type: String
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }],
})

userSchema.methods.generateAuthToken = async function() {
    const user = this
    const token = jwt.sign({ _id: user._id.toString() }, 'verySecretKey')

    user.tokens = user.tokens.concat({ token })
    await user.save()
    
    return token
}


const User = mongoose.model('User', userSchema)

module.exports = User