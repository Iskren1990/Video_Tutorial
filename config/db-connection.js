const mongoose = require("mongoose");

function establishDbConnection(conf) {
    mongoose.connect(
        conf.uri(conf),
        conf.dbOpt,
        (err) => {
            if (err) console.log("Mongoose connection error: ", err)
            if (!err) console.log("DB connection established");
        }
    );
}

module.exports = establishDbConnection;