const axios = require("axios")
const APIGECKO = ("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1")
const TRENDINGCOINS = ("https://api.coingecko.com/api/v3/search/trending")

const APIKEY = "UKJ4UJX1QYWN1WF9";

const getApi = async (req, res) => {
    try {
        const allData = await axios.get(APIGECKO)
        const wrap = []

        allData.data.map((e) => {
            wrap.push({
                name: e.name,
                symbol: e.symbol,
                image: e.image,
                price: e.current_price,
                marketCap: e.market_cap,
                rank: e.market_cap_rank,
                volumen: e.total_volume,
                supply: e.total_supply
            })
        })

        res.json(wrap)
    } catch (error) {
        console.log(error)
    }
}

const getApisend = async (req, res) => {
    try {
        const sendFront = await (getApi)
        res.send(sendFront)
    } catch (error) {
        console.log(error)
    }
}

const getTrending = async (req, res) => {
    try {
        const trending = await axios.get(TRENDINGCOINS)
        const wrap = []
        trending.data.coins.map((e) => {
            wrap.push({
                name: e.item.name,
                symbol: e.item.symbol,
                image: e.item.small,
                rank: e.item.market_cap_rank
            })
        })
        res.json(wrap)

    } catch (error) {
        console.log(error)
    }
}

//Prueba
const getDailyStock = async (req, res) => {  //X
    try {
        //params
        const { symbol } = req.params;
        let stock = await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol}&outputsize=compact&apikey=${APIKEY}`)
        const daily = stock.data["Time Series (Daily)"]
        const stockXChart = [];

        for (var key in daily) {
            stockXChart.push(key)
        }

        res.json(stockXChart)
    } catch (error) {
        console.log(error);
    }

}

const getPriceStock = async(req,res) => {
    try{
        //params
        const { symbol } = req.params;
        let stock = await axios.get(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol}&outputsize=compact&apikey=${APIKEY}`)
        const daily = stock.data["Time Series (Daily)"]
        const stockYChart = [];

        for (var key in daily) {
            stockYChart.push(daily[key]["1. open"])
        }

        res.json(stockYChart)

    }catch(error){
        console.log(error)
    }
}

const getStockInfo = async(req,res) => {
    try{
        const { symbol } = req.params;
        let stock = await axios.get(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol}&apikey=${APIKEY}`)
        let accion = stock.data
        const wrap = []
        wrap.push({
            Name: accion.Name,
            Symbol: accion.Symbol,
            Currency: accion.Currency,
            Sector: accion.Sector
        })

        res.json(wrap);
    }catch(error){
        console.log(error)
    }
}


const getNews = async(req,res) => {
    try{
        const news = await axios.get("https://www.alphavantage.co/query?function=NEWS_SENTIMENT&tickers=TSLA&apikey=UKJ4UJX1QYWN1WF9")
        const wrap = [];

        wrap.push({
            Id: 1,
            Title: news.data.feed[0].title,
            Source: news.data.feed[0].source,
            Topic: news.data.feed[0].topics[0].topic,
            Banner: news.data.feed[0].banner_image,
            URL: news.data.feed[0].url,
            Author:  news.data.feed[0].authors[0]
        },
        {
            Id: 2,
            Title: news.data.feed[1].title,
            Source: news.data.feed[1].source,
            Topic: news.data.feed[1].topics[0].topic,
            Banner: news.data.feed[1].banner_image,
            URL: news.data.feed[1].url ,
            Author:  news.data.feed[1].authors[0]
        },
        {
            Id: 3,
            Title: news.data.feed[2].title,
            Source: news.data.feed[2].source,
            Topic: news.data.feed[2].topics[0].topic,
            Banner: news.data.feed[2].banner_image,
            URL: news.data.feed[2].url,
            Author:  news.data.feed[2].authors[0]
        },
        {
            Id: 4,
            Title: news.data.feed[3].title,
            Source: news.data.feed[3].source,
            Topic: news.data.feed[3].topics[0].topic,
            Banner: news.data.feed[3].banner_image,
            URL: news.data.feed[3].url ,
            Author:  news.data.feed[3].authors[0]
        }
        )


        res.json(wrap)
    }catch(error){
        console.log(error)
    }
}



module.exports = {
    getApi,
    getTrending,
    getDailyStock,
    getPriceStock,
    getStockInfo,
    getNews,

}