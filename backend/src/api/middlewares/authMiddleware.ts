import { Request, Response, NextFunction } from 'express';

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
    // Logique d'authentification
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    // Vérifier et valider le token, puis appeler next()
    // Si token valide
    next();
};

export default authMiddleware;
