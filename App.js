const express=require("express");
const app=express();
const port=3009
const mysql=require("./connection").con
// configuration
app.set("view engine","hbs");
app.set("views","./view")
app.use(express.static(__dirname +"/public"))

//routing

app.get("/", (req, res) => {
    res.render("index")
});
app.get("/add", (req, res) => {
    res.render("add")

});
app.get("/search", (req, res) => {
    res.render("search")

});
app.get("/update", (req, res) => {
    res.render("update")

});

app.get("/delete", (req, res) => {
    res.render("delete")
});

app.get("/addstudent", (req, res) => {
    // fetching data from form
    res.send(req.query);
});

//create server
app.listen(port,(err)=>{
    if(err)
        throw rr
    else
        console.log("Server is running at port %d :",port);
});
