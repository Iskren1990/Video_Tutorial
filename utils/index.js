const sanitizer = require("./sanitizer");
const error = require("./error");
const time = require("./misc");

module.exports = {
    time,
    ...sanitizer,
    ...error,
}