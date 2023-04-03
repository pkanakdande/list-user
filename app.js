const express=require("express")
const app=express()
const connect=require("./conn/conn.js")
const DBmodel=require("./conn/conn.js")


app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.set("views","views")
app.set("view engine","ejs")

app.get("/data",async(req,res)=>{
    let form=await DBmodel.find()
    res.render("list",{form})
})

app.get("/user/hight",(req,res)=>{
    res.render("form")
})




app.get("/form",(req,res)=>{
    res.render("form")
  
})


app.get("/",(req,res)=>{
    res.send("hello")
   
})

app.post("/form", async(req,res)=>{
    console.log(req.body)
    try{
      
    const createNew=await new DBmodel({
        name:req.body.name,
        email:req.body.email,
        age:req.body.age,
        city:req.body.city,
        profession:req.body.profession
  
    })
      await createNew.save()
    res.redirect("/data")

    }
    catch(e){
        res.send(e)
    }
})


app.listen(4000,()=>{
    console.log("run")
})