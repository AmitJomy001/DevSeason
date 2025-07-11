import mongoose from 'mongoose';

const connectDB = async () => {
    try {  
        await mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/mydatabase', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }); 
        console.log('MongoDB connected:', db.connection.host);
    } catch (error) {   
        console.error('MongoDB connection error:', error);
        process.exit(1); // Exit process with failure
    }
}   

export default connectDB;
