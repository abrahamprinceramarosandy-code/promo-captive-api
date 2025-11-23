import express from "express";
import { fetchAllGenders } from "../controllers/gender.controller.js";

const genderRoutes = express.Router();

genderRoutes.get("/", fetchAllGenders);

export default genderRoutes;