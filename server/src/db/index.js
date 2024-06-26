import mongoose from 'mongoose';
const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(process.env.MONGO_URI)
        console.log(`\n MongDB Connected..!! :${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("MONGO_DB connection Error ", error);
        process.exit(1)
    }
}

export default connectDB;   