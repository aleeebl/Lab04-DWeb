const http = require('http');
const server = http.createServer((req, res)=> {
    if(req.url === '/Inicio'){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('Holi!, welcome to mi page xd');}

    else if(req.url === '/Acerdade'){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('write to me.\n');}
   
    else{
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('No se encontro lo que buscas :(');}
});
// Escuchameee dx

server.on('request', (req, res)=>{
    console.log(`Request reseve for URL: ${req.url}`);
});
server.listen(3000, () =>{
    console.log('El servidor esta corriendo en el port 3000');
});