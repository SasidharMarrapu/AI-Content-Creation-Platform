import { Router } from "express"
import { fetchImage, GenerateImage, GenerateText } from "../controllers/AiController.js";

const router = Router();

router.get('/generateText', GenerateText);
router.post('/generateImage', GenerateImage);
router.get('/fetchImage', fetchImage);

export default router;