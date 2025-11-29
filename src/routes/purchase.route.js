import express from 'express';
import { fetchAllPurchase } from '../controllers/purchase.controller.js';

const purchaseRoutes = express.Router();

purchaseRoutes.get("/", fetchAllPurchase);

export default purchaseRoutes;