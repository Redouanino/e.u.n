// lib/mongodb.ts
import mongoose from 'mongoose';

const connectDb = async () => {
    if (mongoose.connection.readyState >= 1) return;
    await mongoose.connect(process.env.MONGODB_URI as string, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};

export default connectDb;
