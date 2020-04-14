const express = require('express')
const router = express.Router()

const Admin = require('../models/Admin')

router.post('/login', (req, res) => {
    const { username, password } = req.body

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
    const { name, email, username, password } = req.body

    const user = new Admin()

    user.name = name
    user.email = email
    user.username = username
    user.generatePasswordHash(password)

    user.save()
        .then(newAdmin => {
            res.json(newAdmin.generateAdminObject())
        })
        .catch(err => {
            res.status(400).json(err)
        })
})

module.exports = router