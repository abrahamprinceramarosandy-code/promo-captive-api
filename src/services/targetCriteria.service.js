import db from "../models/index.js";

export const getAllTargetCriteria = async () => {
    try {
        const targetCriterias = await db.TargetCriteria.findAll({
            include : [
                {
                    model : db.Offer,
                    attributes : ["id", "title", "description"],
                },
                {
                    model : db.Gender,
                    attributes : ["id", "type"]
                },
                {
                    model : db.SocialProfil,
                    attributes : ["id", "type"]
                }
            ]
        })
        return targetCriterias
    } catch (error) {
        throw new Error("Error fetching target criteria :" + error.message);
        
    }
}