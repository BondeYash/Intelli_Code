const generateContent = require('../services/ai.service');
const aiService = require('../services/ai.service')

module.exports.getReview = async (req,res) => {
     const code = req.body.code;

    if (!code) {
        return res.status(400).send("Please Provide Prompt")
    }

    const response = await aiService(code)

    res.status(200).send(response)
}