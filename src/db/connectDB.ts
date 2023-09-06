import mongoose from "mongoose";

const mongo_uri:string = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.fuichu5.mongodb.net/?retryWrites=true&w=majority`;

export const connectDB = async () => {
    try {
        await mongoose.connect(mongo_uri, { dbName: "doctoriiDB" })
    } catch (error) {
        throw new Error("Database Connection Failed!");
    }
}