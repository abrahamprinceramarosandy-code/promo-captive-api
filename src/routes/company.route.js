import express from "express";
import { fetchAllCompanies } from "../controllers/company.controller.js";

const companyRoutes = express.Router();

companyRoutes.get("/", fetchAllCompanies);

export default companyRoutes;