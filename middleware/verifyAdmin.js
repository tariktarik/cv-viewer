import jwt from 'jsonwebtoken';


function verifyAdmin(req, res, next) {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];

    const decoded = jwt.decode(token);

    try {
        if (decoded.user.role !== "admin") {
            res.status(406).json({ message: 'not auth' })
        }
        next();


    }
    catch {
        res.status(500).json({ message: 'something bad' })
    }


}


export default verifyAdmin;