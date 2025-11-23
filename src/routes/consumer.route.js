import express from 'express';
import { fetchAllConsumers } from '../controllers/consumer.controller.js';

const consumerRoutes = express.Router();

consumerRoutes.get("/", fetchAllConsumers);

export default consumerRoutes;