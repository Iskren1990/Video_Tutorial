const express = require("express");
const hbs = require("express-handlebars");
const CP = require("cookie-parser");


function expressConf(app) {

    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(CP());

    app.use(express.static("public"));

    app.engine("hbs", hbs({ extname: ".hbs" }));
    app.set("view engine", "hbs");

}

module.exports = expressConf;