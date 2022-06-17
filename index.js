const http=require("http")
const fs= require("fs");

const serveFile= (filename,res)=>{
     fs.readFile(`${__dirname}/public/${filename}`,'utf8',(err,content)=>{
            if(err) {
                res.writeHead(500);
                res.end("Error:"+ err.message);
            }else{
                res.writeHead(200,{'Content-Type':'text/html'})
                res.end(content)
            }
        })
}

const server= http.createServer((req,res)=>{
    //console.log(req.url);
    if(req.url==="/" || req.url==="/home"){
        serveFile("home.html",res);
    }
    else if(req.url==="/about"){
        serveFile("about.html",res)
    }
    else if(req.url==="/contact"){
        serveFile("contact.html",res)
    }
    else{
        res.writeHead(404).end("Route not found");
    }
});

server.listen(3900,()=>{
    console.log("Server running at port 3900")
})