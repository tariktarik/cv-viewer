import jwt from 'jsonwebtoken';

function verifyAuth(req, res, next) {

    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) res.status(401).send('access denied');
    try {

        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verified;

        next();
    } catch (err) {

        res.status(400).send('Invalid Token')
    }

}



export default verifyAuth;