import { getAllPromoCodes } from "../services/promoCode.servcie.js";

export const fetchAllPromoCodes = async (req, res) => {
    try {
        const promoCodes = await getAllPromoCodes();
        return res.status(200).json(promoCodes);
    } catch (error) {
        return res.status(500).json({error : error.message || "Internam Server Error"});
    }
}