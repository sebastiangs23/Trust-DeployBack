const express = require("express")
const morgan = require("morgan")
const route = require("./src/mainroutes")
const app = express();
// const conn = require("express-myconnection")


//Setear los headers y parsear a json
app.use(express.urlencoded({extended:true, limit: "50mb"}))
app.use(express.json({limit: "50mb"}))
app.use(morgan("dev"))
app.use((req,res,next) => {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Credentials", true)
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE")
    next()
})

//setear nuestrar rutas
app.use("/", route)

//Middleware manejo de errores 
app.use((err,req,res,next)=>{
    const status = err.status || 500
    const message = err.message || err
    console.error(err)
    res.status(status).json(message)
})



const { DB_HOST, DB_NAME, DB_USER, DB_PORT, DB_PASSWORD } = require("./config")


const port = process.env.PORT || 3005;



//app.listen //don
app.listen(port, () => {
    console.log("Servidor levantado en el puerto 3005")
} )