import express from 'express';
/* import verifyAuth from './verifyAuth.js'; */
import Resume from '../models/Resumes.js';
/* import verifyAdmin from './verifyAdmin.js'; */

const router = express.Router();

router.get('/', /* verifyAuth ,*/ async (req, res) => {
    try {
        const employees = await Resume.find({}).select('id firstName lastName position picture');
        res.status(200).json(employees);

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

router.get('/:id', /* verifyAuth ,*/ async (req, res) => {
    try {

        const resumes = await Resume.findOne({ _id: req.params.id });
        res.status(200).json(resumes);

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

router.delete('/:id',/*  [verifyAuth , verifyAdmin] ,*/ async (req, res) => {
    try {

        const resume = await Resume.findOne({ _id: req.params.id });
        resume.remove();
        res.status(200).json({ message: 'Resume deleted' });

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})

router.put('/:id', /* [/* verifyAuth , verifyAdmin], */ async (req, res) => {
    const
        {
            firstName,
            lastName,
            email,
            position,
            quote,
            picture,
            biography,
            dob,
            pob,
            experiences,
            languages,
            jobSkills,
            education,
            myTraits,
            experiencesProjects
        } = req.body;

    try {

        const resume = await Resume.findOne({ _id: req.params.id });
        await resume.updateOne({
            firstName,
            lastName,
            email,
            position,
            quote,
            picture,
            biography,
            dob,
            pob,
            experiences,
            languages,
            jobSkills,
            education,
            myTraits,
            experiencesProjects,
        })

        res.status(200).json({ message: 'Updated' });

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
})



router.post('/', /* [/* verifyAuth , verifyAdmin], */ async (req, res) => {
    const
        {
            firstName,
            lastName,
            email,
            position,
            quote,
            picture,
            biography,
            dob,
            pob,
            experiences,
            languages,
            jobSkills,
            education,
            myTraits,
            experiencesProjects
        } = req.body;

    const resume = new Resume(
        {
            firstName,
            lastName,
            email,
            position,
            quote,
            picture,
            biography,
            dob,
            pob,
            experiences,
            languages,
            jobSkills,
            education,
            myTraits,
            experiencesProjects,
        });

    try {
        /* Validate duplicate entrys !?
            - check if document exists
              -yes: 'duplicate not allowed'
              -no: next() ???? 
        */

        const newResume = await resume.save();
        res.status(201).json({ newResume })

    }
    catch (err) {
        res.status(400).json({ message: err.message })
    }
})


export default router;