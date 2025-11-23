import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import sequelize from "../config/database.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const db = {};

const files = fs.readdirSync(__dirname).filter(file =>
    file.endsWith("Model.js") && file !== "index.js"
);

for (const file of files) {
    const modelPath = path.join(__dirname, file);
    const model = (await import(modelPath)).default(sequelize);

    db[model.name] = model;
}

Object.values(db).forEach(model => {
    if (model.associate) {
        model.associate(db);
    }
});

db.sequelize = sequelize;
db.Sequelize = sequelize;

export default db;