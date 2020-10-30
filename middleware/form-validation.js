const errors = require("../config/proj-props").errorMsg;
const { objTrimmer } = require("../utils/index");

function loginRegForm(req, res, next) {

    req.body = objTrimmer(req.body);

    const { username, password, rePassword } = req.body;
    const regex = /[a-z0-9]{5,}/i;

    if (regex.test(username) === false || regex.test(password) === false) {
        res.locals.error.push(errors.wrongUname);
        res.locals.error.push(errors.wrongLength);
        res.locals.error.push(errors.wrongChar);

    }

    if (rePassword !== undefined) {
        rePassword === password ? true : res.locals.error.push(errors.notEqualPass);
    }

    if (res.locals.error.length > 0) {
        next(res.locals.error);
        return;
    }

    next();
}

function createEditForm(req, res, next) {

    req.body = objTrimmer(req.body);

    const { title, description, imageUrl } = req.body;
    req.body.isPublic = req.body.isPublic == "on";

    if (description.length < 50) res.locals.error.push(errors.wrongLength(50));

    const y = 0;
    [title, description, imageUrl].forEach(x => {
        if (x.length <= 0 && y === 0) res.locals.error.push(errors.emptyField) && y++;
    });

    if (res.locals.error.length > 0) {
        next(res.locals.error);
        return;
    }
    
    next();
}

module.exports = {
    loginRegForm,
    createEditForm
}


