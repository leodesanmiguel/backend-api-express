
// Imports ---------------------------------------
// el paquete express que hace posible el servidor
const express = require('express'); 

// donde está la función de conexión a la base de datos
const conectarDB = require('../db') 

// libreria para que se reciba peticiones con un body en formato JSON
const bodyParser = require('body-parser');

// APLICACIÓN -----------------------------------------------
// definición de la app usando el paquete express
const app = express();

// CONEXION -------------------------------------------------
conectarDB();
// definir como convertir el JSON en datos de java
app.use(bodyParser.json())
//***********************************************************************/
// ubicación de los modelos
app.use('/api/cities', require('../routers/City'));  //listado de Ciudades
//app.use('/api/hotels', require('../routers/Hotel')); // Listado de Hoteles
//app.use('/api/users', require('../routers/User'));   // Listado de Ussuarios
//***********************************************************************/

// Middlewares
app.use(express.json());

// Puerto
const PORT = 3000;
// Arrancar Servidor
app.listen(PORT, () => {
    console.log(`💙 Server is running. http://localhost:${PORT} ✔`)
})
