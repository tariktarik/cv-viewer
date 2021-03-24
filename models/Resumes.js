import mongoose from 'mongoose';

const { Schema } = mongoose;

const resumesSchema = new Schema({

    firstName: { type: String, required: true, trim: true },
    lastName: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, trim: true },
    position: { type: String, required: true, trim: true },
    quote: { type: String, default: '', trim: true },
    picture: { type: String, default: '', trim: true },
    biography: { type: String, default: '', trim: true },
    dob: { type: Date, required: true },
    pob: { type: String, required: true, trim: true },
    experiences: Schema.Types.Mixed,
    languages: Schema.Types.Mixed,
    jobSkills: Schema.Types.Mixed,
    education: Schema.Types.Mixed,
    myTraits: Schema.Types.Mixed,
    experiencesProjects: Schema.Types.Mixed,


})

const Resume = mongoose.model('Resume', resumesSchema);

export default Resume;
