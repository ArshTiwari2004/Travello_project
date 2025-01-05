import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.routes.js';
import InfoRoutes from './routes/user.routes.js';
import questRoutes from './routes/quests.routes.js';
import './config/dotenv.js';

const app = express();
app.use(cors({
    origin: 'https://travello-project.vercel.app', 
    credentials: true,                
  }));

app.use(express.json());
app.use(cookieParser());


mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to Database Successfully ! '))
    .catch((err) => console.error(err));

app.use('/api/auth', authRoutes);
app.use('/api/user', InfoRoutes);
app.use('/api/quests', questRoutes);

app.get("/",(req,res)=>{
    res.send("Testing")
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));