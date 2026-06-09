import { Schema, model } from "mongoose";

const tabla = new Schema({
    nombre: String,
    edad: Number,
    area_designada: String,
    id : number
});

export const Tabla = model("Tabla_de_Empleados", tabla);
