import { GoogleGenerativeAI } from "@google/generative-ai";

const GEMINI_API_KEY="AIzaSyBwbZjdfIm5oylCJq6uIHCmfHrEHizlnaU"
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);

const TextGenerationModel = genAI.getGenerativeModel({
    model: "gemini-1.5-flash"
});

export default TextGenerationModel;