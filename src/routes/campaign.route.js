import express from 'express';
import { fetchAllCampaign } from '../controllers/campaign.controller.js';

const campaignRoute = express.Router();

campaignRoute.get("/", fetchAllCampaign);

export default campaignRoute;