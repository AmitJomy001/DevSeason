import express from 'express';
import router from './routes/routes';

const app = express();
const PORT = 8000;

// by doing this way you can make the code cleaner and more modular
// app.use('/auth', authRoutes);
// app.use('/users', userRoutes);
// then inside the authRoutes and userRoutes files, you can define your routes

app.use('/', router);



app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})