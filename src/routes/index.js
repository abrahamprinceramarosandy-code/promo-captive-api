import express from "express";
import categoryRoutes from './category.route.js';
import companyRoutes from "./company.route.js";
import genderRoutes from "./gender.route.js";
import socialProfilRoute from "./socialProfil.route.js";
import campaignRoute from "./campaign.route.js";
import consumerRoutes from "./consumer.route.js";
import offerRoutes from "./offer.route.js";
import promoCodeRoutes from "./promoCode.routes.js";
import targetCriteriaRoutes from "./targetCriteria.route.js";
import purchaseRoutes from "./purchase.route.js";

const router = express.Router();

router.use("/categories", categoryRoutes);
router.use("/companies", companyRoutes);
router.use("/genders", genderRoutes);
router.use("/social-profils", socialProfilRoute);
router.use("/campaigns", campaignRoute);
router.use("/consumers", consumerRoutes);
router.use("/offers", offerRoutes);
router.use("/promo-codes", promoCodeRoutes);
router.use("/criterias", targetCriteriaRoutes);
router.use("/purchase", purchaseRoutes);

export default router;