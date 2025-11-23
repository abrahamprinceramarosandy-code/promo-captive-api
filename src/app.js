import express from 'express';
import routers from './routes/index.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/ping', (req, res) => {
    res.status(200).json({ message: "pong" });
});

app.use('/api', routers);

export default app;