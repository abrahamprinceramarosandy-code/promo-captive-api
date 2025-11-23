import db from "../models/index.js";

export const getAllGender = async () => {
    try {
        const genders = await db.Gender.findAll();
        return genders;
    } catch (error) {
        throw new Error("Error fetching genders: " + error.message);
    }
}