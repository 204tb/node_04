//モジュールの読み込み
const express = require("express")

const dotenv = require("dotenv")

dotenv.config()//.envの読み込み

const host = process.env.HOST
const port = process.env.PORT

const routes = require("./routes")

const app = express()

app.use(express.static(__dirname+'/public'))
app.use(express.urlencoded({ extended: true}))

//レイアウト設定
const layouts = require("express-ejs-layouts")
app.set("layout","layouts/default")
app.set("view engine","ejs")
app.use(layouts)

app.use(routes)//読み込んだモジュールを使う
//テンプレートエンジンを設定
app.set("view engine","ejs")

app.listen(port,host,()=>{
    console.log("http://"+host+":"+port)
})