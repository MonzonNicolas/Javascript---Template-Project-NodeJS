const express = require('express')
const app = express()

app.get('/', (req, res) => {
	res.end("finalizando")
})

/*Documentación: //Obtenido de StackOverflow

res.send([body])
Sirve para enviar la respuesta HTTP. Ejemplos:
res.send(new Buffer('buffer'));
res.send('<p>ejemplo html</p>');
res.status(404).send('Error 404');
res.status(500).send({ error: 'error 500' });
res.send({ ejemplo: 'json' });

En http.ServerResponse de Node Core tenemos el método response.end(), este es
el equivalente de res.end(). Se usa para finalizar rapido sin datos:
res.end();
res.status(404).end();

Mas informacion:
http://expressjs.com/en/4x/api.html#res.send
http://expressjs.com/en/4x/api.html#res.end

*/