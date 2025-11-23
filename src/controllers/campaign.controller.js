import { getAllCampaign } from "../services/campaign.service.js";

export const fetchAllCampaign = async (req, res) => {
    try {
        const campaigns = await getAllCampaign();
        return res.status(200).json(campaigns);
    } catch (error) {
        return res.status(500).json({error : error.message});
    }
}