const express = require("express")
const path = require("path")
const app = express();

app.use(express.static("public"));

app.listen(3030 , ()=>
console.log("servidor en marcha")

);
app.get("/", (req,res)=>{

    res.sendFile(path.join(__dirname,"/views/index.html"))
})
