const fs = require("fs")


fs.appendFile('index.html', ',Only Amit  ', function(err) {
    if(err) {
        console.log("Erron in Append File");
        
    }

    else{
        console.log("Append File Created ");
        
    }

})







