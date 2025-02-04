import { Router } from "express";
import { login, register, verifyOtp } from "../controllers/UserController.js";

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.post('/verifyOtp', verifyOtp);

export default router;