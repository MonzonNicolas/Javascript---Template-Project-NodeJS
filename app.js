const express = require('express')
const app = express()

app.use(express.static('assets')) //Usa los arhicvos estáticos de directorio indicado

app.listen(3000, () => {
	console.log('Escuchando en el puerto 3000')
})