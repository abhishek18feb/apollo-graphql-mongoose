const Customer = require("../models/Customer");
const books = [
    {
      title: 'The Awakening',
      author: 'Kate Chopin',
    },
    {
      title: 'City of Glass',
      author: 'Paul Auster',
    },
];

module.exports = {
    books: async () => {
        // let result = await Customer.insertMany([
        //     {
        //         name:"Abhishek",
        //         email:"abhishek@yopmail.com"
        //     }
        // ])
        // console.log(result);
        return books
    }
}