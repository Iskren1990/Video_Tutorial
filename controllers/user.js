const jwt = require("jsonwebtoken");
const { key } = require("../config/variables");
const bcrypt = require("bcrypt");
const errorMsg = require("../config/strings").errorMsg;

function createJWT(data) {
    return jwt.sign(data, key, { expiresIn: "1 day" });
}


const register = {
    get: function (req, res) {
        req.render("register");
    },
    post: function (req, res) {
        
    }
}

const login = {
    get: function (req, res) {
        req.render("login");
    },
    post: function (req, res) {

    }
}

const logout = {
    get: function (req, res) {
        res.clearCookie("uid");
        res.render("/home");
    }
}

module.exports = {
    register,
    login,
    logout
}