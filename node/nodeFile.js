const http = require('http')
const fs = require('fs');
// const path = require('path');

const serveur = http.createServer((req, res) =>{
    console.log(req.url, req.method);

    
    res.setHeader('Content-Type', 'text/html' )
    let path = './node/'
    switch(req, res){
        case '/':
            path += 'home.html';
            break;
        case '/contact':
            path += 'contact.html'
        default :
        path += 'nofine.html';
    }


    fs.readFile(path, (err, data) =>{
        if (err) {
            console.log(err);
        }else{
            
            res.end(data)
        }
    })
})

serveur.listen(3000, 'localhost', () =>{
    console.log('Serveur demarrer et en ecoute du port 3000');
    
})