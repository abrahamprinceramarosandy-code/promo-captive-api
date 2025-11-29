import db from "../models/index.js";

export const getAllCampaign = async ()  => {
   try {
    const campaigns = await db.Campaign.findAll({
        include : [
            {
                model : db.Company,
                attributes : ["id", "name", "id_category"],
                include: [
                    {
                    model: db.Category,
                    attributes: ["id", "name"]
                    }
                ]
            }
        ]
    })
    return campaigns;
   } catch (error) {
    throw new Error("Error fetching campaigns: " +error.message);
   } 
}