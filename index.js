const express = require("express");
const app = express();
const port = 8080;
const mongoose = require("mongoose");
const path = require("path");
const pricing = require("./models/pricing.js")
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
main()
.then(()=>{
    console.log("Connection succesful");
})
.catch((err) => console.log(err));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/farmer");
}



//Index route 
app.get("/pricing", async (req,res)=>{
    try {
        let pricings = await pricing.find().sort({ price: -1 });
        let highestBid = pricings[0];
        res.render("index.ejs", { pricings, highestBid });
    } catch (err) {
        console.log(err);
    }
})
//New 
app.get("/pricing/new", async (req,res)=>{
    res.render("new.ejs");
})
//Create 
app.post("/pricing",(req,res)=>{
    let{from,price} = req.body;
    let newPrice = new pricing({
        from:from,
        price:price,
        created_at:new Date()
    })
    newPrice
    .save()
    .then((res)=>{
        console.log("Price saved");
    })
    .catch((err)=>{
        console.log(err);
    })
    res.redirect("/pricing");

})

app.get("/",(req,res)=>{
    res.send("Root is working!!!!!");
})
app.listen(8080,()=>{
    console.log(`${port} at your command, Sir`);
});