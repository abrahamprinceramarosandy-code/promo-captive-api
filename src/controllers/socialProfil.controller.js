import { getAllSocialProfil } from "../services/socialProfil.service.js";

export const fethAllSocialProfil = async (req , res) => {
    try {
        const allSocialProfil = await getAllSocialProfil();
        return res.status(200).json(allSocialProfil);
    } catch (error) {
        return res.status(500).json({error : error.message})
    }
}