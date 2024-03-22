const express = require("express");
const router = express.Router();
const schemas = require("../models/schemas");

router.post("/users", async (req, res) => {
  try {
    const { email } = req.body;

    const existingUser = await schemas.Users.findOne({ email });

    if (existingUser) {
      res.status(208).json({});
    } else {
      const newEmail = new schemas.Users({ email });
      const saveEmail = await newEmail.save();
      console.log(saveEmail);
      if (saveEmail) {
        res.status(201).json({ message: "Assinatura concluída com sucesso!" });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erro ao realizar a assinatura"})
  }
});

module.exports = router;