const fs = require('fs');

const registrar = (nombre, edad, animal, color, enfermedad) => {
    const nuevaCita = { nombre, edad, animal, color, enfermedad };
    const citas = JSON.parse(fs.readFileSync('citas.json', 'utf-8')); // Lee las citas existentes
    citas.push(nuevaCita); // Agrega la nueva cita
    fs.writeFileSync('citas.json', JSON.stringify(citas, null, 2)); // Guarda las citas actualizadas
    console.log('Cita registrada con éxito:', nuevaCita);
};

const leer = () => {
    const citas = JSON.parse(fs.readFileSync('citas.json', 'utf-8')); // Lee las citas
    console.log('Citas registradas:', citas);
};
module.exports = { registrar, leer };
