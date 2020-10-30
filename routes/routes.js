const { loggedUserStop, guestUserStop, loginRegForm, createEditForm } = require("../middleware/index");
const { register, login, logout, home, create, details, edit, deleted, enroll } = require("../controllers/index");

function routes(app) {

    app.get("/register", loggedUserStop, register.get);
    app.post("/register", loggedUserStop, loginRegForm, register.post);

    app.get("/login", loggedUserStop, login.get);
    app.post("/login", loggedUserStop, loginRegForm, login.post);

    app.get("/logout", logout.get);

    app.get(["/", "/home"], home.get);

    app.get("/create", guestUserStop, create.get);
    app.post("/create", guestUserStop, createEditForm, create.post);

    app.get("/details/:id", guestUserStop, details.get);

    app.get("/edit/:id", guestUserStop, edit.get);
    app.post("/edit/:id", guestUserStop, createEditForm, edit.post);

    app.get("/delete/:id", guestUserStop, deleted.get);

    app.get("/enroll/:id", guestUserStop, enroll.get);

}

module.exports = routes;