let mongoose = require('mongoose');
let Admin = require('../models/Admin');

/*
 * GET /admin route to retrieve all the admins.
 */
function getAdmins(req, res) {
    //Query the DB and if no errors, send all the admins
    let query = Admin.find({});
    query.exec((err, admins) => {
        if(err) res.send(err);
        //If no errors, send them back to the client
        res.json(admins);
    });
}

/*
 * POST /admin to save a new admin.
 */
function postAdmin(req, res) {
    //Creates a new admin
    var newAdmin = new Admin(req.body);
    //Save it into the DB.
    newAdmin.save((err,admin) => {
        if(err) {
            res.send(err);
        }
        else { //If no errors, send it back to the client
            res.json({message: "Admin successfully added!", admin });
        }
    });
}

/*
 * GET /admin/:id route to retrieve a admin given its id.
 */
function getAdmin(req, res) {
    Admin.findById(req.params.id, (err, admin) => {
        if(err) res.send(err);
        //If no errors, send it back to the client
        res.json(admin);
    });        
}

/*
 * DELETE /admin/:id to delete a admin given its id.
 */
function deleteAdmin(req, res) {
    Admin.remove({_id : req.params.id}, (err, result) => {
        res.json({ message: "Admin successfully deleted!", result });
    });
}

/*
 * PUT /admin/:id to updatea a admin given its id
 */
function updateAdmin(req, res) {
    Admin.findById({_id: req.params.id}, (err, admin) => {
        if(err) res.send(err);
        Object.assign(admin, req.body).save((err, admin) => {
            if(err) res.send(err);
            res.json({ message: 'Admin updated!', admin });
        });    
    });
}

//export all the functions
module.exports = { getAdmins, postAdmin, getAdmin, deleteAdmin, updateAdmin };
