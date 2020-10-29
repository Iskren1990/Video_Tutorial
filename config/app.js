const { errCtn } = require("../utils/error");
const { userStatus } = require("../middleware/index");
const { setTitle } = require("../middleware/index");


function appConfig(app) {


    app.use(errCtn);
    app.use(userStatus);
    app.use(setTitle);


}

module.exports = appConfig;

