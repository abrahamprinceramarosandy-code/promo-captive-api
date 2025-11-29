import { fetchAllTargetCriteria } from "../controllers/targetCriteria.controller.js";
import express from 'express';

const targetCriteriaRoutes = express.Router();

targetCriteriaRoutes.get("/", fetchAllTargetCriteria);

export default targetCriteriaRoutes;