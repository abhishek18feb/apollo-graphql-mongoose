const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const customerSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    firstName: {type:String},
    lastName: {type:String},
    address: {type:String},
    unit:{type:String}
}, {timestamps:true})

module.exports = mongoose.model('Customer', customerSchema)
