const fs = require('fs');
const path = require('path');
const {v4: uuidv4} = require('uuid');

const dirCode = path.join(__dirname, '../code'); 
//creating folder if it doesn't exist
if(!fs.existsSync(dirCode)) {
    fs.mkdirSync(dirCode, { recursive: true });
}
//the recursive true here creates any preceding directories if they do not exist (not just the last one)

const generateFile = (language:string,code:string) => {
    // const jobId = uuidv4();
    // our final file shd be unique_string.language
    // ex 238sdkljh2.cpp 
    const uniqueString = uuidv4();
    console.log("uniqueString:", uniqueString);
    const fileName = `${uniqueString}.${language}`; 
    const filePath = path.join(dirCode, fileName);
    console.log("filePath:", filePath);
    fs.writeFileSync(filePath, code);
    console.log("File generated at:", filePath);    
    return filePath;
}
export default generateFile;