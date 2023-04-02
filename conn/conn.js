const mongoose=require("mongoose")
mongoose.connect("mongodb://localhost:27017/list-api")
.then(res=>{
    console.log("connection successful")
})
.catch(res=>{
    console.log("error")
})


const createSchema=new mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    age:{
        type:Number
    },
    city:{
        type:String
    },
    profession:{
        type:String
    }
})

const DBmodel=mongoose.model("list",createSchema)
module.exports=DBmodel