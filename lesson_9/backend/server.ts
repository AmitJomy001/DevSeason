const express = require('express');
const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req:any, res:any) => {
    res.send('Hello World!');
});

app.post('/run', (req:any, res:any) => {
    const {code, language} = req.body;
    console.log("language:", language);
    console.log("code:", code);
})

app.listen(PORT, () => {
    console.log("Server is running on port", PORT);
})