var express = require("express");
var app = express();
var cors = require("cors");
var bodyParser = require("body-parser")

app.use(cors());
app.use(bodyParser());

var mongoose = require("mongoose");
var Schema = mongoose.Schema;
mongoose.connect('mongodb://localhost/time4lunch');

var itemSchema = new Schema({
    name : String,
    price : Number
})

var menuSchema = new Schema({
    title : String,
    description : String
})

var userSchema = new Schema({
    userName : String,
    email : String,
    password : String,
    accountType : String
})

var Item = mongoose.model('Item', itemSchema);
var Menu = mongoose.model('Menu', menuSchema);
var User = mongoose.model('User', userSchema);


app.get("/", function (req, res) {
    Item.find(function (err, items){
        res.send(items);
    })
})

app.post("/addItem", function (req, res) {
    var name = req.body.name;
    var price = req.body.price;
    var item = new Item({name:name , price:price});
    item.save(function(err){
        res.send();
    })
})

app.post("/addMenu", function (req, res) {
    var title = req.body.title;
    var description = req.body.description;
    var menu = new Menu({title:title , description:description});
    menu.save(function(err){
        res.send();
    })
})

app.post("/addUser", function (req, res) {
    console.log(req);
    var userName = req.body.userName;
    var email = req.body.email;
    var password = req.body.password;
    var accountType = req.body.accountType;
    var user = new User({userName: userName, email: email, password: password, accountType: accountType});
    user.save(function (err) {
        res.send();
    })
})

app.listen(3000);