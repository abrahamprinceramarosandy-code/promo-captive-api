import { getAllGender } from "../services/gender.service.js";

export const fetchAllGenders = async (req , res) => {
    try {
        const genders = await getAllGender();
        return res.status(200).json(genders);
    } catch (error) {
        return res.status(500).json({error : error.message || "Internal Server Error"})
    }
}