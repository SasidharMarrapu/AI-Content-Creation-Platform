import { Router } from "express"
import { fetchImage, GenerateImage, GenerateText, GenerateEmail } from "../controllers/AiController.js";

const router = Router();

router.get('/generateText', GenerateText);
router.post('/generateImage', GenerateImage);
router.get('/fetchImage', fetchImage);
router.get('/generateEmail', GenerateEmail);

export default router;