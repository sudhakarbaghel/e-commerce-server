import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
    {
        username: { type: String, required: true },
        image: { type: String},
        email: { type: String, required: true, unique: true },
        password: { type: String, required: false }, 
        googleId: { type: String, required: false, unique: true }, 
    },
    {
        timestamps: true, 
    }
);

const User = mongoose.model('User', userSchema);

export default User;
