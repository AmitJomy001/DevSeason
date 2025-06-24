const express = require("express");
import generateFile from "./utils/fileGenerator";
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: any, res: any) => {
  res.send("Hello World!");
});

app.post("/run", (req: any, res: any) => {
  const { language, code } = req.body;
  console.log("language:", language);
  console.log("code:", code);

  try {
    const filePath = generateFile(language, code);
    res.status(200).json({ message: "File generated successfully", filePath });
  } catch (error) {
    res.status(500).json({ message: "Error generating file", error });
  }
});

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
