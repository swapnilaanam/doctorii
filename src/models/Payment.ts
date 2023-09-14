import mongoose from "mongoose";

const paymentSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    transactionId: {
        type: String,
        required: true
    },
    ticketPrice: {
        type: Number,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    doctorEmail: {
        type: String,
        required: true
    },
    doctorName: {
        type: String,
        required: true
    }
});

export default mongoose.models.Payment || mongoose.model("Payment", paymentSchema);