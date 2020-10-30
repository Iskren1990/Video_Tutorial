const { views } = require("../config/proj-props");

function errCtn(req, res, next) {
    res.locals.error === [] ? true : res.locals.error = [];
    next();
}

function globalErrorHandler(err, req, res, next) {
    // console.error("Global error: ", err);

    let path = req.path;
    let id = req.params.id === undefined ? "" : "/" + req.params.id;
    req.user.create = path === "/create";


    if (path.includes("/edit")) {
        path = "/edit";
        id = req.path.split("/").pop();
    }

    const body = { ...req.user, ...req.body, error: res.locals.error, _id: id };

    // console.error("Global Custom Err: ", body);

    res.render(views[path], body);
}

module.exports = {
    errCtn,
    globalErrorHandler,
}
