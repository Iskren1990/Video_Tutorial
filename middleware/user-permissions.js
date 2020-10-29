const jwt = require("jsonwebtoken");
const { key } = require("../config/variables");

function guestUserStop(req, res, next) {

    if (req.user.isLogged === false) {
        res.redirect("/login");
        return;
    }

    next()
}

function loggedUserStop(req, res, next) {

    if (req.user.isLogged === true) {
        res.redirect("/");
        return;
    }

    next();
}

function userStatus(req, res, next) {
    const status = req.cookies.uid;

    if (status === undefined) {
        req.user = { isLogged: false }
    } else {
        req.user = jwt.verify(status, key) || { isLogged: false };
    }

    next();
}


module.exports = {
    guestUserStop,
    loggedUserStop,
    userStatus
}