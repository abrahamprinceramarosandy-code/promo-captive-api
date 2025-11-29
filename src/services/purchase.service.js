import db from "../models/index.js";

export const getAllPurchase = async () => {
    try {
        const purchase = await db.Purchase.findAll({
            include : [
                {
                    model : db.Offer, 
                    attributes : ["id", "title", "description"]
                },
                {
                    model : db.Consumer, 
                    attributes : ["id", "forname", "email", "number"]
                },
                {
                    model : db.PromoCode,
                    attributes : ["id", "is_used", "used_at"]
                }
            ]
        })
        return purchase;
    } catch (error) {
        throw new Error("Error fetching purchase :" + error.message);
    }
}