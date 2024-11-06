const User = require("../models/User");
const {genSalt, hash, compare} = require("bcrypt");

async function register(userName, password) {
    if (!userName || !password) {
        throw new Error("Username and password are required.");
    }

    const salt = await genSalt(10);
    const hashPassword = await hash(password, salt);
    const newUser = new User({
        username: userName,
        password: hashPassword,
    });

    return newUser.save(); // Save the user to the database
}

async function login(userName, password) {
    const user = await User.findOne({username: userName});
    if (!user) {
        throw new Error("User not found");
    }
    const isMatch = await compare(password, user.password);
    if (!isMatch) {
        throw new Error("Invalid password");
    }
    return user;
}

module.exports = {
    register, login
}