import mongoose from "mongoose";

const connectDB = async () => {
    await mongoose.connect('mongodb://localhost:27017/express-mongo');
    console.log('Database connected');
}

export default connectDB;