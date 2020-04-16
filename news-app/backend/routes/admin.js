const express = require('express')
const router = express.Router()

const Admin = require('../models/Admin')
const News = require('../models/News')
var login = false;

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
                    
                    login = true
                    module.exports.state = login
                    res.redirect('/news/home')
                } else {
                    res.redirect('/?error=' + encodeURIComponent('Invalid_Credentials'))
                    //res.status(401).json({ msg: 'Invalid Credentials.' })
                }
            } else {
                res.redirect('/?error=' + encodeURIComponent('Invalid_Credentials'))
                //res.status(401).json({ msg: 'Invalid Credentials.' })
            }
        })
        .catch(err => { console.log('Admin.findOne error') }
            )
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
            console.log(newAdmin)
            login = true
            module.exports.state = login
            res.redirect('/news/home')
        })
        .catch(err => {
            res.redirect('/?error=' + encodeURIComponent('Duplicate_Username'))
            //res.status(400).json(err)
        })
})
router.post('/newsPost', (req, res) => {

    const { title, description, url, imageUrl, category, date } = req.body

    const singleNews = new News()

    singleNews.title = title,
    singleNews.description = description,
    singleNews.URL = url;
    singleNews.imageURL = imageUrl,
    singleNews.category = category;
    singleNews.publishedAt = date
    console.log(singleNews)
    
    singleNews.save()
        .then(newPost => {
            console.log(newPost);
            res.redirect('/news/home')
        })
        .catch(err => {
            res.status(400).json(err)
        })
})
module.exports = router
