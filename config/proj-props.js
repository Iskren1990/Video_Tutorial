module.exports = {
    titles: {
        "": "Home Page",
        "home": "Home Page",
        "login": "Login Page",
        "register": "Register Page",
        "profile": "Profile Page",
        "create": "Create Course Page",
        "details": "Details Course Page",
        "edit": "Edit Course Page",
        "404": "Page Not Found"
    },
    errorMsg: {
        wrongUname: "Incorrect username or password.",
        wrongEmail: "Incorrect email or password.",
        wrongLength: (limit="the minimum") => `Should be more than ${limit} characters.`,
        wrongChar: "Latin characters and numbers.",
        notEqualPass: "Both passwords must match",
        emptyField: "Name, Price and Image Url are required.",
        emailUsed: "Email is already taken, please use another",
        unameUsed: "Username is already taken, please use another",
        wrongCred: "Wrong credentials",
        notNumber: "Price should be a number",
        notUnique: (name="ID") => `${name} should be unique`,
        general: "Something went wrong, please excuse us and try again",
    },
    views: {
        "/": "home",
        "/home": "home",
        "/register": "register",
        "/login": "login",
        "/create": "create-edit",
        "/edit": "create-edit",
    }
}