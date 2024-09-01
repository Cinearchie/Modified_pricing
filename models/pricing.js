const mongoose = require("mongoose");

const farmerSchema = new mongoose.Schema({
    from:{
        type: String,
        required : true
    },
    price:{
        type: Number,
        required : true
    },
    created_at:{
        type:Date,
        required : true
    }
})

const pricing = mongoose.model("pricing",farmerSchema);
module.exports = pricing;