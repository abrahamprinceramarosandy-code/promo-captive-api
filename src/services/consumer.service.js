import db from "../models/index.js";

export const getAllConsumers = async ()  => {
    try {
        const consumers = await db.Consumer.findAll({
            include  : [
                {
                    model : db.SocialProfil,
                    attributes : ["id", "type"]
                }, 
                {
                    model : db.Gender,
                    attributes : ["id", "type"]
                }
            ]
        });
        return consumers
    } catch (error) {
        throw new Error("Error while fetching consumers : " + error.message);
    }
}