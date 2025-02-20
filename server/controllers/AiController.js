import TextGenerationModel from "../gemini/gemini.js"

const GenerateText = async(req,res) => {
    try {
        const { prompt } = req.body;

        const result = await TextGenerationModel.generateContent(prompt);
        return res.status(200).json({ success: true, response: result.response.text() });
        
    } catch (error) {
        return res.status(500).json({ success: false, error: error.message });
    }
}

export { GenerateText };