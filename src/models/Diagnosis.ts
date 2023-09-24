import mongoose, { model } from "mongoose";

const diagnosisSchema = new mongoose.Schema({
    diagnosisName: {
        type: String,
        required: true,
        unique: true,
    },
    diagnosedArea: {
        type: String,
        required: true,

    },
    diagnosisDetails: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    }
})

export default mongoose.models.Diagnosis || mongoose.model("Diagnosis", diagnosisSchema);