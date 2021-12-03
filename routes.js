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
    res.render("index.ejs")//ファイルを読み込んで表示
})

router.get("/profile",(req,res)=>{
    res.render("profile/profile.ejs")
})

router.get("/login",(req,res)=>{
    res.render("login/login.ejs")
})


module.exports = router