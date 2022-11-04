const { Cheese } = require("./models")
const db = require("./db")
async function seed () {

  await db.sync({ force: true })

  await Cheese.create({
    id: "1", title: "Gouda",
   
  })
  await Cheese.create({
  title: "2k",
 
  })
   await Cheese.create({
   title: "Parmesan"
  })
}

seed()