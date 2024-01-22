import mongoose from "mongoose";

const emergencyDoctorSchema = new mongoose.Schema({
    doctorName: {
        type: String,
        required: true,
    },
    doctorPhone: {
        type: String,
        required: true
    },
    doctorCity: {
        type: String,
        required: true
    },
    doctorPhoto: {
        type: String,
        required: true,
    },
    ticketPrice: {
        type: Number,
        required: true
    }
});

export default mongoose.models.EmergencyDoctor || mongoose.model('EmergencyDoctor', emergencyDoctorSchema);