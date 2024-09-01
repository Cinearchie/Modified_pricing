const mongoose = require("mongoose");
const pricing = require("./models/pricing.js")

main()
.then(()=>{
    console.log("Connection succesful");
})
.catch((err) => console.log(err));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/farmer");
}

let allPrice = [
    {
        from:"Archishman",
        price:12000,
        created_at:new Date()
    },
    {
        from:"Sai",
        price:12433,
        created_at:new Date()
    },
    {
        from:"Nikhil",
        price:15033,
        created_at:new Date()
    },
    {
        from:"Korkora",
        price:12533,
        created_at:new Date()
    },
    {
        from:"Riya",
        price:42000,
        created_at:new Date()
    },
    {
        from:"Subhasmita",
        price:52000,
        created_at:new Date()
    }
];
pricing.insertMany(allPrice);