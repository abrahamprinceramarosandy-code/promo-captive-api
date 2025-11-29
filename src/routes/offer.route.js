import express from 'express'
import { fetchAllOffers } from "../controllers/offer.controller.js";

const offerRoutes = express.Router();

offerRoutes.get("/", fetchAllOffers);

export default offerRoutes;