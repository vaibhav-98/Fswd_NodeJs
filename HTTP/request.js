const https = require("https"); 

const options = {
  hostname: "fakestoreapi.com",
  path: "/products/1",
  method: "GET",
};

const ApiReq = https.request(options, (apiRes) => {
  let data = "";

  // receiving data in chunks
  apiRes.on("data", (chunk) => {
    data += chunk;
  });

 
  apiRes.on("end", () => {
    console.log(JSON.parse(data)); 
  });
});


ApiReq.on("error", (error) => {
  console.log("Error:", error.message);
});


ApiReq.end();
