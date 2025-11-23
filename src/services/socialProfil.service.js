import db from "../models/index.js";

export const getAllSocialProfil = async () => {
    try {
        const socialProfils = await db.SocialProfil.findAll();
        return socialProfils;
    } catch (error) {
        throw new Error("error fetching social profil :" + error.message);
    }
}