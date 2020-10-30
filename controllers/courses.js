const { Courses } = require("../models/index");
const { errorMsg } = require("../config/proj-props");

const home = {
    get: async function (req, res) {
        req.user.courses = await Courses.find({ isPublic: true }).lean();
        req.user.courses
            .sort((a, b) => a.enrolled.length - b.enrolled.length)
            .map(x => x.createdAt = Date(x.createdAt).split(" GMT")[0]);

        if (req.query.search) req.user.courses = req.user.courses.filter(x => x.title.includes(req.query.search));
        if (req.user.isLogged === false) {
            req.user.courses = req.user.courses.slice(0, 3);
        }

        res.render("home", req.user);
    }
}

const create = {
    get: function (req, res) {
        req.user.create = true;
        res.render("create-edit", req.user);
    },
    post: async function (req, res, next) {

        await Courses.create({ ...req.body, owner: req.user.id }, (err, suc) => {
            if (err) {
                err = res.locals.error.push(errorMsg.notUnique("Course name"));
                next(err);
                return;
            } else {
                res.status(302).redirect("/home");
            }
        });

    }
}

const details = {
    get: async function (req, res) {
        const courseId = req.params.id;
        const chosenCourse = await Courses.findOne({ _id: courseId }).lean();
        req.user.isOwner = req.user.id == chosenCourse.owner.toString();
        req.user.isJoined = Object.values(chosenCourse.enrolled).map(x => x.toString()).includes(req.user.id);

        res.render("details", { ...req.user, ...chosenCourse });
    }
}

const edit = {
    get: async function (req, res) {
        req.user.create = false;

        const courseId = req.params.id;
        const userId = req.user.id;
        const chosenCourse = await Courses.findOne({ _id: courseId }).lean();

        res.render("create-edit", { ...req.user, ...chosenCourse });
    },
    post: async function (req, res) {
        const courseId = req.params.id;
        const userId = req.user.id;

        await Courses.findOneAndUpdate({ _id: courseId, owner: userId }, { ...req.body },
            (err) => {
                if (err) {
                    ree = res.locals.push(errorMsg.general)
                    next(err);
                }
            });

        res.redirect("/home");
    }
}

const deleted = {
    get: async function (req, res) {
        const userId = req.user.id;
        const courseId = req.params.id;

        await Courses.findOneAndDelete({ _id: courseId, owner: userId });

        res.status(302).redirect("/home");
    }
}


const enroll = {
    get: async function (req, res) {
        const userId = req.user.id;
        const courseId = req.params.id;

        await Courses.findOneAndUpdate({ _id: courseId, owner: { $nin: userId } }, { $addToSet: { enrolled: userId } });

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