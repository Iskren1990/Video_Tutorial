const sanitizer = require("./sanitizer");
const error = require("./error");

module.exports = {
    ...sanitizer,
    ...error,
}