const db = require("./db/db")
const { Cheese } = require("./models")

async function main () {
await db.sync()
  const allCheese = await Cheese.findAll()
  console.table(allCheese.map(p => p.toJSON()))

}

main();