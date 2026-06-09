import {Tabla} from "../models/trabajadores.models.js";

Tabla.create({
    nombre: "Don rafa",
    edad: 97,
    area_designada: "Cada una de las areas de la empresa, ademas de poner el internet en Gigacable",
    id: 1
});
({
    nombre: "Alan",
    edad: 45,
    area_designada: "Personal de carga y descarga",
    id: 2
});
({
    nombre: "Coffee",
    edad: 20,
    area_designada: "Conserjeria",
    id: 3
});
({
    nombre: "Mayte",
    edad: 18,
    area_designada: "Recepcion",
    id: 4
});
({
    nombre: "Agripino",
    edad: 60,
    area_designada: "Atencion al cliente",
    id: 5
});

export const test = () => console.log("Si funciona el controlador de trabajadores");
