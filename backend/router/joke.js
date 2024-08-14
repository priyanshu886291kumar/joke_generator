const express = require("express");
const OpenAI = require("openai");
const env = require("dotenv");
env.config();

const router = express.Router();

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

router.post("/generate" , async (req, res) => {
    const word = req.body.word;

    const response = await openai.chat.completions.create({
        model: "gpt-3.5-turbo",
        messages: [
            {
                "role": "user",
                "content": "tell me a joke about " + word,
            }
        ],
        temperature: 1,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    });

    // console.log(response);

    if(response) return res.status(200).json({
        joke: response.choices[0].message.content,
    })
})


module.exports = router;