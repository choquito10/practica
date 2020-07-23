const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const db = require('./db');

app.get('/acamica/:comision/alumnos', (req, res) => {
    let { comision } = req.params;
    let { nombre } = req.query;
    if (nombre) {
        res.json(db.porNombre(nombre));
        return
    }
    res.json(db.porComisionYnombre(comision, nombre))
})


app.get('/acamica/:comision/alumnos/:id', (req, res) => {
    let { comision, id } = req.params;
    if (db.PorIdYCOMISION(comision, id).length === 0) {
        res.status(404).send('not found')
        return
    }
    res.json(db.PorIdYCOMISION(comision, id))
})

app.get('/array', (req, res) => {
    res.json(db.retornarArray());
})

app.delete('/acamica/:comision/alumnos/:id', (req, res) => {

    let { comision, id } = req.params
    if (db.Eliminar(comision, id).length > 0) {
        res.json('usuario ha sido eliminado')
        return
    }
    res.status(404).send('not found')
})


app.listen(port, () => {
    console.log('escuchando en puerto ' + port)
})