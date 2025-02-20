import { Router } from "express"
import { GenerateText } from "../controllers/AiController.js";

const router = Router();

router.get('/generateText', GenerateText)

export default router;