// SERVIDOR DE API REST CON MONGODB
// Imports ---------------------------------------
// el paquete express que hace posible el servidor
const express = require("express");

// donde está la función de conexión a la base de datos
const conectarDB = require("../db");

// libreria para que se reciba peticiones con un body en formato JSON
const bodyParser = require("body-parser");

// libreria que habilita el cors
const cors = require('cors');

// APLICACIÓN -----------------------------------------------
// definición de la app usando el paquete express
const app = express();

// Habilita CORS para el acceso
app.use(cors());
// ----------------------------------------------------
// configuración para la restricción de acceso a la API
// ... lista blanca de los que tienen acceso
const whiteList = ["http://localhost:3000", "http://localhost:3002"];
// ... Opciones: Si está en la lista blanca, entonces SI
//               sino NO 
const corsOption = {
  origin: (origin, callback) => {
    if (whiteList.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("📛 Not Allowed by CORS ❌"));
    }
  },
};

// CONEXION -------------------------------------------------
conectarDB();
// definir como convertir el JSON en datos de java
app.use(bodyParser.json());
//***********************************************************************/
// ubicación de los modelos
//app.use("/api/cities", cors(corsOption), require("../routers/City")); //listado de Ciudades
app.use("/api/cities", require("../routers/City")); //listado de Ciudades
app.use("/api/itineraries", require("../routers/Itinerary"));
//app.use('/api/hotels', require('../routers/Hotel')); // Listado de Hoteles
//app.use('/api/users', require('../routers/User'));   // Listado de Ussuarios
//***********************************************************************/

// Middlewares
app.use(express.json());

// Puerto
const PORT = 3002;
// Arrancar Servidor
app.listen(PORT, () => {
  console.log(`💙 Server is running. http://localhost:${PORT} ✔`);
});
