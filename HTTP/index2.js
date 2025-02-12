const http = require("http")      

const PORT = 3004
const HOSTNAME = "localhost"

 const server = http.createServer( (req,res) => {
    //Home Page
    if(req.url == "/") {
        res.statusCode = 200;
        res.setHeader("Content-type", "text/plain")
        res.end("Welcome to node js Server Created by Amit")
    }

    //About Page
    if(req.url == "/about") {
        res.statusCode = 200;
        res.end("<h1>Welcome to node js Server Created by Prakash<h1>")
    }

    // Contact

    
 })

 server.listen(PORT, () => {
    console.log(`Server running at${HOSTNAME} :${PORT}`);
    
 })





