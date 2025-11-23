import { getAllCategories } from "../services/category.service.js";

export const fetchAllCategories = async (req, res) => {
    try {
        const categories = await getAllCategories();
        return res.status(200).json(categories); 
    } catch (error) {
        return res.status(500).json({ error: error.message || "Internal Server Error" }); 
    }
};