import express from 'express';

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
/* import verifyAuth from './verifyAuth.js';
import verifyAdmin from './verifyAdmin.js'; */
import User from '../models/Users.js';



const router = express.Router();

router.get('/', async (req, res) => {
    try {

        const users = await User.find();
        res.status(200).json(users);

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

router.get('/:id', async (req, res) => {
    try {

        const user = await User.findOne({ _id: req.params.id });
        if (user !== null) {
            res.status(200).json(user);
        } else {
            res.status(404).json({ message: 'Not found User' })
        }


    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

router.delete('/:id', async (req, res) => {
    try {

        const user = await User.findOne({ _id: req.params.id });
        user.remove();
        res.status(200).json({ message: 'User deleted' });

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

router.post('/register', async (req, res) => {
    const
        {
            firstName,
            lastName,
            email,
            password,
            role
        } = req.body;

    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    const user = new User(
        {
            firstName,
            lastName,
            email,
            passwordHash,
            role,
        });

    try {
        const newUser = await user.save();
        res.status(201).json({ message: `${newUser.email} added` })
    }
    catch (err) {
        res.status(400).json({ message: err.message })
    }
})

router.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email }).select('+passwordHash');

        /* 
            user.confirmed manuleno u bazi na true - sad za sad 
        */

        if (user && user.confirmed) {
            bcrypt.compare(password, user.passwordHash, (err, result) => {
                if (err) {
                    res.json({ message: err.message })
                }
                if (result) {
                    const token = jwt.sign({ user }, process.env.TOKEN_SECRET)
                    res.status(200).json({ message: 'Login ok', token })
                } else {
                    res.json({ message: 'Login not ok' })
                }
            })

        } else {
            res.status(404).json({ message: "User not found or not confirmed" });
        }

    } catch (error) {
        res.status(404).json({ message: 'not found' });
    }

})

export default router;
