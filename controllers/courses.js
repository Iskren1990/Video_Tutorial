

const home = {
    get: function (req, res) {
        res.render("home", {isLogged: true});
    }
}

const create = {
    get: function (req, res) {
        req.user.create = true;
        res.render("course-form", req.user);
    },
    post: function (req, res) {

    }
}

const details = {
    get: function (req, res) {
        res.render("details");
    }
}

const edit = {
    get: function (req, res) {
        req.user.create = false;
        res.render("course-form", req.user);
    },
    post: function (req, res) {

    }
}

const deleted = {
    get: function (req, res) {
        
    }
}


const enroll = {
    get: function (req, res) {
        const courseId = req.params.id;
        
        res.redirect(`/details/${courseId}`);
    }
}

module.exports = {
    home,
    create,
    details,
    edit,
    deleted,
    enroll,
}