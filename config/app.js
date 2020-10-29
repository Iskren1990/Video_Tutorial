const { errCtn } = require("../utils/error");
const { userStatus } = require("../middleware/user-permissions");
const { setTitle } = require("../middleware/page-title");


function appConfig(app) {


    app.use(errCtn);
    app.use(userStatus);
    app.use(setTitle);


}

module.exports = appConfig;

