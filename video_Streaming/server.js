const http = require('http')
const fs = require('fs')
const path = require('path')

const PORT = 3000
const VIDEO_PATH = path.join(__dirname, "v1.mp4")


const server = http.createServer( (req,res) => {
    if(req.url ==='/video') {

        fs.stat(VIDEO_PATH, (err, stats) => {

            if(err) {
                console.error("Error reading file start", err);
                res.writeHead(500, {"Content-Type": "text/plain"})
                return res.end("Internal server error ")
                
            }

            const { range } = req.headers;
            if(!range) {
                res.writeHead(416,{"Content-Type": "text/plain"})
                return res.end("Range header requireed")
            }


            const fileSize = stats.size
            const CHUNK_SIZE = 10 ** 6 // 1MB chunk size 
            const start = Number(range.replace(/\D/g,"")) 
            const end = Math.min(start + CHUNK_SIZE, fileSize - 1);

            const contentLength = end - start + 1;
            const headers = {
                "Content-Range": `bytes ${start}-${end}/${fileSize}`,
                "Accept-Range": "bytes",
                "Content-Length": contentLength,
                "Content-Type": "video/mp4"
            };

            res.writeHead(206,headers)

            const videoStream = fs.createReadStream(VIDEO_PATH,{start,end})
            videoStream.pipe(res)
        });
    }
    else {
        res.writeHead(200,{"Content-Type": "text/html"})
        return res.end("Path incorrect")
        
    }

})

server.listen(PORT, () => {
    console.log(`server running at http://localhost${PORT}`);
    
})
