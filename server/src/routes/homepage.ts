import { Router } from "express";

import getHomepage from "../controllers/homepage";

const router = Router();

router.get('/', getHomepage);

export default router;
