exports.values=[
    {id:1,name:"コーヒー",price:150},
    {id:2,name:"お茶",price:80},
    {id:3,name:"ほうじ茶",price:120}
]
exports.get_data = function(values,id){
    if(id<=values.length && id>0){
        return values[id-1];
    }
    return ;

}
exports.find = (id)=>{
    return this.values.find(value => value.id == id)
}