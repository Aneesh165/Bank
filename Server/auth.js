import jwt from 'jsonwebtoken';

const Authentication = (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer ', '');

    if (!token) {
        return res.status(401).json({ message: 'Access denied. No token provided.' });
    }

    try {
        const verified = jwt.verify(token, process.env.JWT_Secret); 
        req.admin = verified.admin; 
        next(); 
    } catch (error) {
        res.status(400).json({ message: 'Invalid token.' });
    }
};

export default Authentication;