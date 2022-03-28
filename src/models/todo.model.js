const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const todoSchema = new mongoose.Schema({
    title: {type: String, required: true},
    user_id : {type : mongoose.Schema.Types.ObjectId, ref:"user", required : true}
},
{
    timestamps : true,
    versionKey : false, 
}
);


const Todo= mongoose.model("todos", todoSchema);
module.exports = Todo;

