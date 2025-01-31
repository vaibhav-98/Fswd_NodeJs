const https = require("https"); // Use https instead of http

const options = {
  hostname: "fakestoreapi.com",
  path: "/products/1",
  method: "GET",
};

const ApiReq = https.request(options, (apiRes) => {
  let data = "";

  // Receiving data in chunks
  apiRes.on("data", (chunk) => {
    data += chunk;
  });

  // When response ends, log complete data
  apiRes.on("end", () => {
    console.log(JSON.parse(data)); 
  });
});

// Proper error handling
ApiReq.on("error", (error) => {
  console.log("Error:", error.message);
});


ApiReq.end();
