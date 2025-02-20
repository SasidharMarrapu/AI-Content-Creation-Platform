import TextGenerationModel from "../ai-config/gemini.js"
import { ImageGenerationModel, fetchImageUrl } from "../ai-config/monster_api.config.js";

const GenerateText = async(req,res) => {
    try {
        const { prompt } = req.body;

        const result = await TextGenerationModel.generateContent(prompt);
        return res.status(200).json({ success: true, response: result.response.text() });
        
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
}

const GenerateImage = async(req,res) => {
    try {
        const { prompt } = req.body;

        const generateImage = await ImageGenerationModel(prompt);
        return res.status(200).json({ success: true, process_id: generateImage });
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
}

const fetchImage = async(req,res) => {
    try {
        const { process_id } = req.body;

        const imageUrl = await fetchImageUrl(process_id);
        return res.status(200).json({ success: true, imageUrl });
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
}

export { GenerateText, GenerateImage, fetchImage };