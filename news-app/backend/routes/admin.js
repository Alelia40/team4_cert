const express = require('express')
const router = express.Router()

const Admin = require('../models/Admin')

router.post('/login', (req, res) => {
    const { LoginUserName, password } = req.body

    console.log(LoginUserName+" "+ password);

    //Admin.findOne({ username: username })
    Admin.findOne({ username: LoginUserName })
        .then(user => {
            console.log(user)
            if (user) { //if(user !== null) {
                //Compare the password.
                if (user.comparePassword(password)) {
                    
                    console.log("I am here.. but I don't wanna die")
                    // obj = user.generateAdminObject()
                    // console.log(obj)
                    res.redirect('/news/home')
                    //res.render('newsList', jwt)
                    //res.redirect('/news')
                } else {
                    res.status(401).json({ msg: 'Invalid Credentials.' })
                }
            } else {
                res.status(401).json({ msg: 'Invalid Credentials.' })
            }
        })
        .catch(err => 
            console.log("I am here, and I will die sooon!"))
            //res.status(400).json(err))
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