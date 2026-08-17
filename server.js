const http = require("http");
const PORT = 3000;
const fs = require("fs");
const server = http.createServer((req,res)=>{
    if(req.url === "/"){
        res.setHeader("Content-Type", "text/plain");
        res.write("Home");
        res.end();
    }
    else if(req.url === "/about"){
        res.setHeader("Content-Type", "text/plain");
        res.write("About");
        res.end();
    }
    else if (req.url === "/api/data"){
        fs.readFile(`${__dirname}/jsonData/data.json`, "utf-8", (err,data)=>{
            if (err){
                res.writeHead(500, {"Content-Type":"text/plain"})
                res.write("Internal Server Error");
            }
            else{
                res.writeHead(200,{"Content-Type":"application/json"});
                res.end(data);
            }
        })
    }
})
server.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})