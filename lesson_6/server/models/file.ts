import mongoose from 'mongoose';

const FileSchema = new mongoose.Schema({
    path: {
        type: String,
        required: true
    }   ,
    downloadCount: {
        type: Number,
        default: 0
    },
});

const File = mongoose.model('File', FileSchema);
export default File;
