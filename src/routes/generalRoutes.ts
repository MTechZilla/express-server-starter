import { checkServerHealth } from "../controllers/general.controller";
import { checkApiKey } from "../middlewares/auth";
import express from "express";

const router = express.Router({ mergeParams: true });

router.route("/").get(checkApiKey, checkServerHealth);

export default router;
