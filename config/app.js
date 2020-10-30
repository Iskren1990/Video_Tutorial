const { errCtn } = require("../utils/index");
const { userStatus, setTitle } = require("../middleware/index");


function appConfig(app) {

    app.use(errCtn);
    app.use(userStatus);
    app.use(setTitle);

}

module.exports = appConfig;

