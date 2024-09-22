import { Request, Response, NextFunction } from 'express';
import asyncHandler from 'express-async-handler';
const User = require( '../../models/userModel');

export const getAllUsers = asyncHandler(async (req: Request, res: Response, next: NextFunction) => {
    const users = await User.find();

    if (users.length === 0) {
        const err = new Error('No users found');
        return next(err);
    }

    res.status(200).json({ success: true, users });
});
