import { fetchAllPromoCodes } from "../controllers/promoCode.controller.js";
import express from 'express';

const promoCodeRoutes = express.Router();

promoCodeRoutes.get("/", fetchAllPromoCodes);

export default promoCodeRoutes;