const express = require("express")
const app = express()
const PORT = process.env.PORT || 5000

app.get("/", (req, res) => {
  res.json({ message: "Nova versão publicada automaticamente via GitHub Actions!" })
})

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
})