import { Router } from "express"
import { fetchImage, GenerateImage, GenerateText, GenerateEmail, GenerateBlog } from "../controllers/AiController.js";

const router = Router();

router.get('/generateText', GenerateText);
router.post('/generateImage', GenerateImage);
router.get('/fetchImage', fetchImage);
router.get('/generateEmail', GenerateEmail);
router.get('/generateBlog', GenerateBlog);

export default router;