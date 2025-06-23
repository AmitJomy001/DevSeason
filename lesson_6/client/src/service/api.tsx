import axios from "axios";
const API_URL = "http://localhost:8000";
const uploadFile = async(data : FormData) => {
    try{
        const response = await axios.post(`${API_URL}/upload`, data);
        
    }
    catch(error : unknown){
        console.log("Error uploading file: ", error);
    }
}

export default uploadFile;

