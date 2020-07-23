let alumnos = [{
        id: 1,
        nombre: 'choco',
        comision: 'dwfs'
    },
    {
        id: 2,
        nombre: 'laura',
        comision: 'dwa'
    },
    {
        id: 3,
        nombre: 'nati',
        comision: 'bigdata'
    }
]


function porNombre(nombre) {
    return alumnos.filter(x => x.nombre == nombre);
}

function porComisionYnombre(c, n) {
    return alumnos.filter(x => x.nombre == n || x.comision == c)
}

function PorIdYCOMISION(c, i) {
    return alumnos.filter(x => x.id == i && x.comision == c)
}

function Eliminar(c, i) {
    let b = false;
    for (let o = 0; o < alumnos.length; o++) {
        if (alumnos[o].id == i && alumnos[o].comision == c) {
            b = true;
            alumnos.splice(o, 1);
            alumnos = alumnos;
        }
        return b
    }
}

function retornarArray() {
    return alumnos;
}

module.exports = {
    porNombre,
    porComisionYnombre,
    PorIdYCOMISION,
    Eliminar,
    retornarArray
}