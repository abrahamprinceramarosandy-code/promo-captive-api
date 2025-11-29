import db from "../models/index.js";

export const getAllPromoCodes = async () => {
    try {
        const promoCodes = await db.PromoCode.findAll({
            include : [
                {
                    model : db.Offer,
                    attributes : ["id", "title", "description"]
                }, 
                {
                    model : db.Consumer, 
                    attributes : ["id", "forname", "email", "number"]
                }
            ]
        });
        return promoCodes;
    } catch (error) {
        throw new Error("Error while fetching promo code :" + error.message);
        
    }
}