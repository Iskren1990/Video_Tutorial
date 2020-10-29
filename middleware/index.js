const userMiddleware = require("./user-permissions");
const formMiddleware = require("./form-validation");
const pageTitle = require("./page-title");


module.exports = {
    ...userMiddleware,
    ...formMiddleware,
    ...pageTitle
}