const express = require('express');
const app = express();
app.use(express.json());
const mongoose = require('mongoose');
const cors = require('cors');
const connection_url = 'mongodb+srv://admin:BoAoAuyCcujHi0Ln@cluster0.qni0g.mongodb.net/NarutoDB?retryWrites=true&w=majority';
mongoose.connect(connection_url,{useUnifiedTopology:true,useCreateIndex:true,useNewUrlParser:true});
const QuizUserSchema = mongoose.Schema({
    name:String,
    password:String,
    email:String,
    position:String
})
const QuizUsers = mongoose.model("quizuser",QuizUserSchema);
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.get("/",(req,res)=>{
    res.send("Welcome to our siteasdas");
})
app.get("/login",function(req,res){
    res.send("Yes");
})
app.post("/login",(req,res)=>{
    // const dat = {
    //     name:req.body.name,
    //     password:req.body.password
    // }
    // res.send(dat);
    const newUser = new QuizUsers({
        name:req.body.name,
        password:req.body.password,
        email:req.body.email,
        position:req.body.role
    })
    // newUser.save();
    res.redirect("/");
})
app.post("/signin",(req,res)=>{
    res.redirect("/");
    console.log(req.body);
})
app.listen(4000);