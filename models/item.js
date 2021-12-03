exports.values=[
    {id:1,name:"コーヒー",price:150},
    {id:2,name:"お茶",price:80},
    {id:3,name:"ほうじ茶",price:120}
]
exports.get_data = function(values,id){
    values.forEach(data => {
        if(data.id==id){
            return data
        }
    });

}