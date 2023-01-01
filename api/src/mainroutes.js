const {Router} = require("express")

const geckoroute = require("./routes/coinroute")


const router = Router()

router.use("/",geckoroute)

module.exports = router