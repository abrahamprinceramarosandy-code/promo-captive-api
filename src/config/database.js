import { Sequelize } from "sequelize";
import config from "./dotenv.js";

const sequelize = new Sequelize(
    config.db.name,
    config.db.user,
    config.db.password,
    {
        host: config.db.host,
        port: config.db.port,
        dialect: "postgres",
        logging: false, 
    }
);

export const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log("✅ PostgreSQL connection established successfully");
    } catch (error) {
        console.error("❌ Unable to connect to the database:", error);
    }
};

export default sequelize;