const { PrismaClient } = require("@prisma/client")
const prisma = new PrismaClient()

async function main() {
  await prisma.product.createMany({
    data: [
      { name: "Produto A", price: 100 },
      { name: "Produto B", price: 200 },
    ],
  })
}

main()
  .then(() => {
    console.log("Database seeded")
  })
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
