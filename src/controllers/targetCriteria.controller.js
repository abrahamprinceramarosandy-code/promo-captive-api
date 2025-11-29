import { getAllTargetCriteria } from "../services/targetCriteria.service.js";

export const fetchAllTargetCriteria = async (req, res) => {
    try {
        const criterias = await getAllTargetCriteria();
        return res.status(200).json(criterias);
    } catch (error) {
        return res.status(500).json({error : error.message});
    }
}