const bookResolver = require("./book");
const customerResolver = require("./customer");

const rootResolver = {
    ...bookResolver,
    ...customerResolver
};

module.exports = rootResolver;