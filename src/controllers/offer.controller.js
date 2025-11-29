import { getAllOffers } from "../services/offer.service.js";

export const fetchAllOffers = async (req , res) => {
    try {
        const offers = await getAllOffers();
        return res.status(200).json(offers); 
    } catch (error) {
        return res.status(500).json({error : error.message || "Internal Server Error"});
    }
}