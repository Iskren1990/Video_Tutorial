const { titles } = require("../utils/strings");

function setTitle(req, res, next) {
    const titleKey = req.path.split("/")[1];
    req.user.title = titles[titleKey] || titles["404"];

    next();
}

module.exports = { setTitle };