const express = require("express")
const cors = require("cors")
const { PrismaClient } = require("@prisma/client")

const app = express()
const port = 3001
const prisma = new PrismaClient()

app.use(cors())

// Rota assíncrona para buscar dados do banco de dados usando Prisma
app.get("/products", async (req, resposta) => {
  try {
    const products = await prisma.product.findMany()
    setTimeout(() => {
      resposta.json(products)
    }, 2000)
  } catch (error) {
    resposta.status(500).json({ message: "Erro ao buscar produtos" })
  }
})

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`)
})
