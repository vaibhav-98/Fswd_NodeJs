const fs = require("fs")

fs.unlink("index.html", function(err) {
    if(err) {
        console.log("Error Delete file not exist");
        
    }
    else {
        console.log("Deleted File sucessfully");
        
    }
})

