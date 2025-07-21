const express = require("express");
const { OpenAI } = require("openai");
const dotenv = require("dotenv");

dotenv.config();

const router = express.Router();

// ✅ Create client instance using new SDK v4.x syntax
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

router.post("/", async (req, res) => {
  const { messages } = req.body;

  try {
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages,
    });

    res.json({ reply: completion.choices[0].message.content });
  } catch (err) {
    console.error("GPT error:", err);
    res.status(500).json({ error: "Failed to get response from GPT" });
  }
});

module.exports = router;
