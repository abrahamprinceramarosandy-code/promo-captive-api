import { getAllPurchase } from "../services/purchase.service.js";

export const fetchAllPurchase = async (req, res) => {
    try {
        const purchase = await getAllPurchase();
        return res.status(200).json(purchase);
    } catch (error) {
        return res.status(500).json({error : error.message})
    }  
}