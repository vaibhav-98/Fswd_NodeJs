const http = require("http")

const Server = http.createServer( (req,res) => {
     if(req.url == '/') {
        res.write('<h1> Hello , Node js server <h1>')
     }
     res.end();
})

Server.listen(3000);

console.log("THe Http Server is running port no, 3000");


