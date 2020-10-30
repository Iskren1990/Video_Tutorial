const { titles } = require("../config/proj-props");

function setTitle(req, res, next) {
    const titleKey = req.path.split("/")[1];
    req.user.pTitle = titles[titleKey] || titles["404"];

    next();
}

module.exports = { setTitle };