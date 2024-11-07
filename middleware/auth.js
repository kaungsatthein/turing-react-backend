const jwt = require("jsonwebtoken");
const {config} = require("../config/config");

function verifyUserToken(req, res, next) {
    let token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({message: "Access denied. No token provided."});
    }

    try {
        token = token.split(" ")[1];
        if (token === "null" || !token) return res.status(401).json({message: "Unauthorized token"});
        let verifiedUser = jwt.verify(token, config.TOKEN_SECRET);
        console.log(verifiedUser);
        if (!verifiedUser) return res.status(401).json({message: "Unauthorized request"});
        req.user = verifiedUser;
        next();
    } catch (e) {
        return res.status(401).json({message: "Invalid token."});
    }
}

module.exports = {
    verifyUserToken
}