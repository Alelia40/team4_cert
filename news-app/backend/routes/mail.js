const express = require('express');
const router = express.Router();
const sgmail = require("@sendgrid/mail");

const bodyParser = require('body-parser');
router.use(bodyParser.urlencoded({extended:true}));
router.use(bodyParser.json());

sgmail.setApiKey('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');

router.post("/sendMail", (req, res) => {
    let data = req.body;
    let sender = data.email; 
    if (data.email == ""){
        sender = "anonymous"
    }
    const msg = {
        to: 'tcst4test@gmail.com',
        from: 'tcst4test@gmail.com',
        subject: 'New Query',
        html: `<p>${data.content}</p>
        <p>-from ${sender}</p>
        <strong>From the Update 24/7 contact-us page</strong>`,
    };
    sgmail.send(msg, (err) =>{
        if(err){
            res.status(500).send("error");
        }else{
            res.status(200).send("sendgrid sending email to " + data.email);
        }
    });

    
})

module.exports = router;
