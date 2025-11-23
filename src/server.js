import app from './app.js';
import { connectDB } from './config/database.js';
import config from "./config/dotenv.js";

const PORT = config.port || 3000;

connectDB();

app.listen(PORT, () => {
    console.log(`🚀 Promo-Captive API running on port ${PORT}`);
});
