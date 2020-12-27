const Customer = require("../models/Customer");
const mongoose = require("mongoose");

module.exports = {
    customers: async() => {
       try{
        
            let result = await Customer.find({});
            return result;
        } catch (error) {
            throw new Error (error.message);
        }
        
    }
}
