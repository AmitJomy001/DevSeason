import { useState, useRef, useEffect } from "react";
import "./App.css";
import uploadFile from "./service/api";

function App() {
  const [file, setFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    const getImage = async (file: File) => {
      console.log("file: ", file);
      const data = new FormData();
      data.append("file", file);
      data.append("fileName", file.name);
      console.log("trying to upload file: ", file.name);
      const response = await uploadFile(data);
      console.log("response: ", response);
    };
    getImage(file as File);
  }, [file]);
  return (
    <>
      <div
        style={{
          backgroundColor: "grey",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <h1>File sharing Tool</h1>
        <p>Upload your files here to begin</p>
        <button
          onClick={fileInputRef.current?.click.bind(fileInputRef.current)}
        >
          Upload
        </button>
        <div>
          <input
            hidden={true}
            type="file"
            ref={fileInputRef}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setFile(e.target.files?.[0] ?? null);
            }}
          />
        </div>
      </div>
    </>
  );
}

export default App;
