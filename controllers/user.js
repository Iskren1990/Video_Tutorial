const { User } = require("../models/index");

const jwt = require("jsonwebtoken");
const { key } = require("../config/variables");
const bcrypt = require("bcrypt");
const errorMsg = require("../config/proj-props").errorMsg;

function createJWT(data) {
    return jwt.sign(data, key, { expiresIn: "1 day" });
}


const register = {
    get: function (req, res) {
        res.render("register");
    },
    post: async function (req, res, next) {
        const { username, password } = req.body;

        await User.create({ username, password }, (err, suc) => {
            if (err) {
                res.locals.error.push(errorMsg.unameUsed);
                next(res.locals.error);
            } else {
                const token = createJWT({ id: suc._id, username, isLogged: true });
                res.cookie("uid", token);
                res.status(302).redirect("/");
            }
        });
    }
}

const login = {
    get: function (req, res) {
        res.render("login");
    },
    post: async function (req, res) {
        const { username, password } = req.body;

        try {
            const dbUserCheck = await User.findOne({ username });
            const isRegistered = bcrypt.compareSync(password, dbUserCheck.password);

            if (isRegistered === false) { throw new Error(isRegistered) }

            const token = createJWT({ id: dbUserCheck._id, username, isLogged: true });
            res.cookie("uid", token);

        } catch (error) {
            res.locals.error.push(errorMsg.wrongCred);
            next(res.locals.error);
            return;
        }

        res.redirect("/");
    }
}

const logout = {
    get: function (req, res) {
        res.clearCookie("uid");
        res.redirect("/home");
    }
}

module.exports = {
    register,
    login,
    logout
}