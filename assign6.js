const fs = require("fs");
const http = require("http");
fs.mkdir("Akshita",(err)=>{});
fs.writeFile("./Akshita/biodata.txt","Shreyansh here.",(err)=>{});
fs.appendFile("./Akshita/biodata.txt"," Hello Everyone this is my first task under node js",(err)=>{});
const data = fs.readFileSync("./Akshita/biodata.txt","utf-8");
console.log(data);

const server = http.createServer((req,res)=>{
    res.end(data);
})

server.listen(5000,()=>{
    console.log("Server listening on 5000......");
})