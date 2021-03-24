import mongoose from 'mongoose';

const usersSchema = new mongoose.Schema({

    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trip: true },
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true, select: false },
    role: { type: String, required: true, default: 'client' },
    confirmed: { type: Boolean, default: false },
    picture: { type: String, required: true, default: 'https://imagizer.imageshack.com/img922/3997/EtoOds.png' },
})

const User = mongoose.model('User', usersSchema);

export default User;
