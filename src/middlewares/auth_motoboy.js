const jwt = require("jsonwebtoken");

function verifyJWT(req, res, next) {
    const token = req.headers["x-access-token"];
    if(!token) 
        return res.status(401).json({ msg: "Token indefinido. "});
    jwt.verify(token, process.env.JWT_SECRET_NV1, (err, decoded) => {
        if(err)
            return res.status(401).json({ msg: "Falha na autenticação do token." });
        req.motoboyId = decoded.id;
        next();
    });
}

module.exports = verifyJWT;