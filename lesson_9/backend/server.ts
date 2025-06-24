const express = require("express");
import generateFile from "./utils/fileGenerator";
const cors = require("cors");

import executeCpp from "./utils/executeUtils/executeCpp"; // Assuming you have this utility for executing C++ code

const app = express();
const PORT = process.env.PORT || 8000;
app.use(cors({ origin: "*" }));  

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: any, res: any) => {
  res.send("Hello World!");
});

app.post("/run", async  (req: any, res: any) => {
  const { language, code } = req.body;
  console.log("language:", language);
  console.log("code:", code);

  try {
    const filePath = generateFile(language, code);
    const output = await executeCpp(filePath); 

    
    res.json({ filePath, output });
  } catch (error) {
    res.status(500).json({ message: "Error generating file", error });
  }
});

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
