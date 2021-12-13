exports.index = (req,res) => {//index関数を作成
        //sendは文字を送って表示
    let data ={}
    data.title = "トップページ"
    res.render("index.ejs",data);//受け渡したいデータは第2引数に渡す
}
exports.profile =(req,res)=>{
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
}
