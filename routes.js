const express =require("express")
const router = express.Router()

const default_login_name = process.env.LOGIN_NAME
const default_password = process.env.PASSWORD

router.post('/auth',(req,res) =>{
    let message = "ログイン出来ません"

    //入力されたデータを取得
    const login_name = req.body.login_name
    const password = req.body.password
    console.log("ログイン名:"+login_name)
    console.log("パスワード:"+password)
    if(login_name == default_login_name && password == default_password){
            message = "ログインしました"
    }
    res.send(message)
})

router.get("/",(req,res)=>{
    //sendは文字を送って表示
    let data ={}
    data.title = "トップページ"
    res.render("index.ejs",data)//受け渡したいデータは第2引数に渡す
})

router.get("/profile",(req,res)=>{
    let user ={
        uid:1,
        name:"yse",
        birthplace:"横浜",
        hobby:["旅行", "グルメ","スポーツ"]
    }
    let data ={}
    data.user =user
    data.title = "プロフィール"
    res.render("profile/profile.ejs",data)
})

router.get("/login",(req,res)=>{
    res.render("login/login.ejs")
})

router.get("/item/:id",(req,res)=>{//任意の値を取得
    const id = req.params.id//プレースホルダ名で取得
    console.log(id)
    res.render("item/show.ejs")
})

router.get("/test/:value",(req,res)=>{
    const value = req.params.value
    res.send(value)
})
module.exports = router//機能として読み込ませる際は記述必須