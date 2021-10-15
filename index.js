const express = require('express');
const server = express();
const path = require('path');

const sharp = require('sharp-image-filter')


//var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest; //instalar cuando llegue a la escuela;
//Configuracion
server.set('port',4058);
server.set('view engine','ejs');
server.set('views', path.join(__dirname, 'views'));

//Archivos estaticos
server.use(express.static(path.join(__dirname, 'public')));

//Rutas


////hacer con url 

server.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

server.get('/', (req,resp,next)=>{
  
   sharp.sharpImageProcess('./test.jpg', 'test', resp, {
outPutFormat: 'jpeg',
adaptiveFiltering: true,
width: 600,
heigth: 600,
fit: 'cover',
quality: 50,
},
);
   
})




//vhost
//var app = module.exports = express();

//app.use(vhost('visor.local:3000/', server)); // Serves top level domain via Main server app


server.listen(server.get('port'), '0.0.0.0', ()=>{console.log(`Servidor iniciado  ${server.get('port')}`); console.log(__dirname)});


