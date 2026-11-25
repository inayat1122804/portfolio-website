const express = require("express");
const router = express.Router();
const Contact = require("../model/contactSchema");

router.post("/", async (req, res) => {
  try {
    const { name, email, message, website } = req.body || {};

    if (typeof website === "string" && website.trim()) {
      return res.status(202).json({
        success: true,
        message: "Thanks — your message was sent.",
      });
    }

    if (
      typeof name !== "string" ||
      typeof email !== "string" ||
      typeof message !== "string" ||
      !name.trim() ||
      !email.trim() ||
      !message.trim()
    ) {
      return res.status(400).json({
        success: false,
        message: "Name, email, and message are required.",
      });
    }

    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanMessage = message.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (
      cleanName.length > 100 ||
      cleanEmail.length > 254 ||
      cleanMessage.length > 5000 ||
      !emailPattern.test(cleanEmail)
    ) {
      return res.status(400).json({
        success: false,
        message: "Please check your details and try again.",
      });
    }

    const contact = new Contact({
      name: cleanName,
      email: cleanEmail,
      message: cleanMessage,
    });

    await contact.save();

    res.status(201).json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (error) {
    console.error("Contact message could not be saved", error);
    res.status(500).json({
      success: false,
      message: "Message could not be saved right now. Please try again later.",
    });
  }
});

module.exports = router;
