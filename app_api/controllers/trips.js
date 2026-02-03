const mongoose = require('mongoose');
const Trip = require('../models/travlr');
const Model = mongoose.model('trips');

// Get: /trips - lists all the trips
// Response must include HTML status code and Json message to the requesting client
const tripsList = async(req, res) => {
    const q = await Model
    .find({}) // No filter, return all records
    .exec();

    console.log(q); //Shows querey results on console

    if(!q)
    { //Database returned no data
        return res
                .status(404)
                .json(err);
    } else { //Return resulting trip list
        return res
            .status(200)
            .json(q);
    }
};

// Get: /trips - lists all the trips
// Response must include HTML status code and Json message to the requesting client
const tripsFindByCode = async(req, res) => {
    const q = await Model
    .find({'code' : req.params.tripCode }) // No filter, return all records
    .exec();

    console.log(q); //Shows querey results on console

    if(!q)
    { //Database returned no data
        return res
                .status(404)
                .json(err);
    } else { //Return resulting trip list
        return res
            .status(200)
            .json(q);
    }
};

module.exports = {
    tripsList,
    tripsFindByCode
};

