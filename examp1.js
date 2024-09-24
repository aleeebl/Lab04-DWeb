
const fs = require('node:fs/promises')
fs.writeFile('./archivo2b.txt', 'línea 1\nLínea 2\n creado con promesas.') 
 .then(() => {
    console.log('El archivo de texto se creo empleando promesas')
 })
 .catch(error=> {
    console.log(error)
 })

 console.log('Ultima linea del programa')