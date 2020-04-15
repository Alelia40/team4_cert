const express = require('express');
const router = express.Router();
const sgmail = require("@sendgrid/mail");

const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended:true}));
router.use(bodyParser.json());

sgmail.setApiKey('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');

router.post("/sendMail", (req, res) => {
    let data = req.body;
    console.log(data);
    const msg = {
        to: 'tcst4test@gmail.com',
        from: data.email,
        subject: 'New Query',
        text: data.content,
        html: '<strong>From NewsMe Contact page</strong>',
    };
    sgmail.send(msg);

    res.send("sendgrid sending email to " + data.email);
})

module.exports = router;
