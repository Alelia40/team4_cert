const express = require('express')
const router = express.Router()

const Admin = require('../models/Admin')

router.post('/login', (req, res) => {
    const { LoginUserName, password } = req.body

    // Admin.findOne({ username: username })
    Admin.findOne({ username })
        .then(user => {
            if (user) { //if(user !== null) {
                //Compare the password.
                if (user.comparePassword(password)) {
                    res.json(user.generateAdminObject())
                } else {
                    res.status(401).json({ msg: 'Invalid Credentials.' })
                }
            } else {
                res.status(401).json({ msg: 'Invalid Credentials.' })
            }
        })
        .catch(err => res.status(400).json(err))
})

router.post('/register', (req, res) => {
    const { name, signUpEmail, SignupUserName, signUpPassword } = req.body

    const user = new Admin()

    user.name = name
    user.email = signUpEmail
    user.username = SignupUserName
    user.generatePasswordHash(signUpPassword)

    user.save()
        .then(newAdmin => {
            res.json(newAdmin.generateAdminObject())
        })
        .catch(err => {
            res.status(400).json(err)
        })
})

module.exports = router