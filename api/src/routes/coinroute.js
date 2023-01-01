const {Router} = require("express");

const route = Router()

const {getApi, getTrending, getDailyStock, getPriceStock, getStockInfo, getNews} = require("./indexControl")

route.get("/", getApi)
route.get("/trending", getTrending)
route.get("/stockdaily/:symbol", getDailyStock )
route.get("/stockprice/:symbol", getPriceStock )
route.get("/stockinfo/:symbol", getStockInfo )
route.get("/news", getNews)


module.exports = route