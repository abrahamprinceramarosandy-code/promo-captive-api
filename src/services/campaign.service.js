import db from "../models/index.js";

export const getAllCampaign = async ()  => {
   try {
    const campaigns = await db.Campaign.finAll({
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
   } catch (error) {
    throw new Error("Error fetching campaigns: " +error.message);
   } 
}