import express from "express";

const app = express();
app.use(express.static("public"));

app.get('/',(req,res)=>{
    res.render("index.ejs");
})
app.get('/home',(req,res)=>{
    res.render("index.ejs");
})
app.get('/contact',(req,res)=>{
    res.render("contact.ejs");
})

app.listen(3000,()=>{
    console.log("Server is listening 3000 ");
});
