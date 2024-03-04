const express = require("express");
const router = express.Router();
const schemas = require("../models/schemas");

router.use(express.json());

router.post("/users", async (req, res) => {
  try {
    const { email } = req.body;

    const newEmail = new schemas.Users({ email: email });
    const saveEmail = await newEmail.save();

    if (saveEmail) {
      res.status(201).json({ message: "Assinatura concluída com sucesso!" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Erro ao realizar a assinatura"})
  }
});

router.post("/users/check-email", async (req, res) => {
  const { email } = req.body;

  const existingUser = await schemas.Users.findOne({ email });

  if (existingUser) {
    res.status(400).json({ message: 'Este E-mail já está cadastrado.'});
  } else {
    res.status(200).json({ message: 'E-mail disponível para cadastro.'});
  }
});

module.exports = router;
