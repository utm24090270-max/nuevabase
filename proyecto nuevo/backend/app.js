import mongoose from "mongoose";// librera para conexion a base de datos
import express from "express";// libreria para crear el servidores
import cors from "cors";// libreria para crear seguridad en el servidor
import dotenv from "dotenv";// libreria para configurar el documento .env
import {test} from "./backend/controllers/trabajadores.controllers.js"// importamos la funcion test de alumnos.controllers.js

dotenv.config();// configuracion del documento .env
mongoose.connect(process.env.url_bd)
.then(() => console.log("Si arranca mamalon"))
.catch((error) => console.log("No sirve esta mierda"));

const app = express();
app.use(cors());
app.listen(4000, () => {console.log("No escucha borroso");});
test();