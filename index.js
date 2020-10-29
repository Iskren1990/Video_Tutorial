const { globalErrorHandler } = require("./utils/error");

require("dotenv").config({ path: "./config/.env" });
const config = require("./config/variables");
const app = require("express")();

require("./config/db-connection")(config);
require("./config/express")(app);
require("./config/app")(app);
// require("./routes/routes")(app);

app.use(globalErrorHandler);

app.listen(config.PORT, (err) => {
    if (err) console.log("Something went wrong with the server");
    if (!err) console.log(`Server is listening on port ${config.PORT}\nOpen app on http://localhost:${config.PORT}`);
});