import { getAllConsumers } from "../services/consumer.service.js";

export const fetchAllConsumers = async (req, res) => {
    try {
        const consumers = await getAllConsumers();
        return res.status(200).json(consumers);
    } catch (error) {
        return res.status(500).json({error : error.message});
    }
} 