
const user = require('../models').user;
module.exports = {
    create(req,res){
        return user
            .create({
            name: req.body.name,
        })
            .then(User =>res.status(201).send(User))
            .catch(error => res.status(400).send(error));
        },
    };