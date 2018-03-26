var express = require("express");
var app = express();


app.use(express.static(__dirname));

app.set("view engine","ejs");

app.get("/",function(req,res){
    res.render("index")
})

app.listen(process.env.PORT,process.env.IP,function(){
    console.log("Server has Started");
})