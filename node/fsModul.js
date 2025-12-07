const { log } = require('console')
const fs = require('fs')


/////////////////// Lires les fichiers
fs.readFile('./fichie1.txt', (err, data) =>{
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
    
})