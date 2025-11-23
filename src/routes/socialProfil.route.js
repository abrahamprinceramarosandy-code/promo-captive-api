import express from "express";
import { fethAllSocialProfil } from "../controllers/socialProfil.controller.js";

const socialProfilRoute = express.Router();

socialProfilRoute.get("/", fethAllSocialProfil);

export default socialProfilRoute;