import express from "express";
import { fetchAllCategories } from "../controllers/category.controller.js";

const categoryRoutes = express.Router();

categoryRoutes.get("/", fetchAllCategories);

export default categoryRoutes;