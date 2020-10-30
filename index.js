require("dotenv").config({ path: "./config/.env" });
require("./utils/index").time();

const { globalErrorHandler } = require("./utils/index");
const config = require("./config/variables");
const app = require("express")();

require("./config/db-connection")(config);
require("./config/express")(app);
require("./config/app")(app);
require("./routes/routes")(app);

app.use(globalErrorHandler);

app.listen(config.PORT, (err) => {
    if (err) console.info("Something went wrong with the server");
    if (!err) setTimeout(() => {
        console.info("Server is running.");
        console.info("Open app on:");
        console.info("\033[35mhttp://localhost: " + config.PORT);
    }, 700);
});