const express=require("express")
const app=express()
const connect=require("./conn/conn.js")
const DBmodel=require("./conn/conn.js")


app.use(express.urlencoded({extended:true}))
app.use(express.json())


app.get("/list",(req,res)=>{
    res.render("list.ejs")
})

app.get("/",(req,res)=>{
    res.send("hello")
})

app.set("views","view")
app.set("view engine","ejs")

app.post("/list", async(req,res)=>{
    console.log(req.body)
    try{
      
    const createNew=await new DBmodel({
        name:req.body.name,
        email:req.body.email,
        age:req.body.age,
        city:req.body.city,
        profession:req.body.profession
    })
      const data=await createNew.save()
      res.send(data)

    }
    catch(e){
        res.send(e)
    }
})


app.listen(4000,()=>{
    console.log("run")
})