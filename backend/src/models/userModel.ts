import mongoose, { Schema, Document } from 'mongoose';


export interface IUser extends Document {
    username: string;
    email: string;
    password: string;
    role: string;
    createdAt: Date;
}

// Schéma de l'utilisateur
const userSchema :Schema<IUser> = new mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, 'Username is required'],
            minlength: [3, 'Username must be at least 3 characters long'],
            maxlength: [30, 'Username must be at most 30 characters long'],
            trim: true, // Supprimer les espaces en début/fin
            unique: true, // Le username doit être unique
        },
        email: {
            type: String,
            required: [true, 'Email is required'],
            unique: true, // Un utilisateur avec cet email ne peut exister qu'une seule fois
            match: [
                /^\S+@\S+\.\S+$/,
                'Please use a valid email address', // Validation de l'email avec une regex
            ],
            lowercase: true, // Forcer les emails en minuscules
            trim: true,
        },
        password: {
            type: String,
            required: [true, 'Password is required'],
            minlength: [8, 'Password must be at least 8 characters long'], // Longueur minimale
            select: false, // Ne jamais retourner le mot de passe lors des requêtes
        },
        role: {
            type: String,
            enum: ['user', 'admin'],
            default: 'user',
        },
        createdAt: {
            type: Date,
            default: Date.now,
        },
    },
    {
        timestamps: true, // Ajoute automatiquement les champs createdAt et updatedAt
    }
);

module.exports = mongoose.model("users", userSchema);