const Customer = require("../models/Customer");
const mongoose = require("mongoose");

module.exports = {
    createCustomer: async(_, { firstName, lastName, address, unit }, req) => {
        // console.log(args);
        console.log(firstName, lastName, address, unit);
        try{
            let customer = new Customer({
                _id: new mongoose.Types.ObjectId,
                firstName:firstName,
                lastName:lastName,
                address:address,
                unit:unit
            });
            let result = await customer.save();
            return result;
        } catch (error) {
            throw new Error (error.message);
        }
        
    }
}
