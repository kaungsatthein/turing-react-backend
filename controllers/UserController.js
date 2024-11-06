const UserService = require("../services/UserService");
const jwt = require("jsonwebtoken");
const {config} = require("../config/config")

async function register(req, res, next) {
    let userName = req.body.username;
    let password = req.body.password;
    try {
        let user = await UserService.register(userName, password);
        let payload = {id: user.id};
        const token = jwt.sign(payload, config.TOKEN_SECRET);
        res.status(200).send({token})
    } catch (err) {
        res.status(400).json({message: "Invalid user data."});
    }
}

async function login(req, res, next) {
    let userName = req.body.username;
    let password = req.body.password;
    try {
        let user = await UserService.login(userName, password);
        let payload = {id: user.id};
        const token = jwt.sign(payload, config.TOKEN_SECRET);
        res.status(200).send({token})
    } catch (err) {
        res.status(401).json("Invalid credentials.")
    }
}

module.exports = {
    register,
    login
}