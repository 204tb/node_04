const item =require("../models/item")

exports.index=(req,res)=>{
    let data =[]
    data.title = "商品一覧"
    data.items = item.values
    res.render("item/index.ejs",data)
}
exports.show=(req,res)=>{
    const id = req.params.id//プレースホルダ名で取得
    console.log(id)
    console.log(item)
    const data = item.find(id)

    if(data){
        res.render("item/show.ejs",data)
        console.log("data："+data["name"]+"data:"+data["price"])
    }
}
