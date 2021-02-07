const express = require("express");
const path = require("path");
const port = process.env.PORT||3000;

const app = express();
const functions = require("./functions.js");
app.set("view engine","hbs");
app.use('/assets', express.static(path.join(__dirname, "./assets")));
app.use('/js', express.static(path.join(__dirname, "./js")));
app.get("/", function (req,res){
    res.render("index", {
        title: "Zajęcia piatkowe",
        subTitle: functions.subTitle
    });
})
app.get("/about", function (req,res){
    res.send("Strona o nas");
})

app.listen(port,(err)=>{
    if (err) { return console.log(err)}
    console.log(`Apka działa na porcie ${port}`)
})