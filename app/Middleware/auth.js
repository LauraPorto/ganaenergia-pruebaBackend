const jwt = require('jsonwebtoken');
const secret = process.env.JWT_SECRET || 'secretpassword';

const auth = async (req, res, next) => {
    try{
        const auth = req.headers.auth;
        

        req.user = {
            id: payload.userId
        };
        const payload = jwt.verify(auth, secret, req.user);
        next();
    }catch(error){
        res.sendStatus(403);
    }
};

module.exports = auth;