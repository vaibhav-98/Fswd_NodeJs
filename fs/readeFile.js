const fs = require ("fs")


const context = "Hello I am Aditya and salman "

// fs.writeFile("index.html", context, () => {
//     console.log("file created ");
// })

fs.readFile("index.html", "utf8" ,(err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }
        console.log('File contents:', data);
    });



//  fs.readFile('example.txt', 'utf8', (err, data) => {
//     if (err) {
//         console.error('Error reading file:', err);
//         return;
//     }
//     console.log('File contents:', data);
// });