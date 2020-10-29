const user = require("./user");
const courses = require("./courses");

module.exports = {
    ...user,
    ...courses
}