const default_login_name = process.env.LOGIN_NAME
const default_password = process.env.PASSWORD


exports.index=(req,res)=>{
    res.render("login/login.ejs");
}
exports.auth=(req,res)=>{
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
}