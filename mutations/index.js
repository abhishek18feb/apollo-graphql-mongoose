const customerMutation = require("./customer");

const rootResolver = {
    ...customerMutation
};

module.exports = rootResolver;