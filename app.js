var express = require("express");
var app = express();

//setting view engine
app.set('view engine', 'ejs');

//setting static path
app.use(express.static(__dirname + '/public'));


app.get("/", function (req, res) {
    res.render("index");
})

var PORT = process.env.PORT || '30000';

app.listen(PORT, function () {
    console.log(`Server has started on port: ${PORT}`);
})