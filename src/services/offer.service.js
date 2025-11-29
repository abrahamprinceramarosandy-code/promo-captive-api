import db from "../models/index.js";

export const getAllOffers = async ()  => {
    try {
        const offers = await db.Offer.findAll({
            include : [
                {
                    model : db.Campaign,
                    attributes: ["id", "title"],
                    include : [
                        {
                            model : db.Company, 
                            attributes : ["id", "name"]
                        }
                    ]
                }
            ]
        });
        return offers; 
    } catch (error) {
        throw new Error("Erreur fetching offers: " + error.message);
    }
}