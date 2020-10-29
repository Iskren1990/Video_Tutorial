const errors = require("../utils/strings").errorMsg;

function loginRegForm(req, res, next) {
    const { email, password, rePassword } = req.body;
    const regex = /[a-z0-9]{3,}/i;

    if (regex.test(email) === false || regex.test(password) === false) {
        res.locals.error.push(errors.wrongEmail);
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
    let { name, price, imageUrl, description, brand } = req.body;
    price = price.replace(",", ".");

    [name, imageUrl].forEach(x =>
        x.length > 0
            ? true
            : res.locals.error.push(errors.emptyField)
    );

    if (!/[0-9]+(,[0-9]{1,2})?/.test(price)) {
        res.locals.error.push(errors.notNumber)
    }

    if (res.locals.error.length > 0) {
        next(res.locals.error);
        return;
    }

    req.body = { name, price: price, imageUrl, description: description || "No description", brand: brand || "No Brand" };


    next();
}

module.exports = {
    loginRegForm,
    createEditForm
}