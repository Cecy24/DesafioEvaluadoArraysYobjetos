document.write('<p>Estadisticas centro medico ñuñoa</p>');

const radiologia = [
    {hora: '11:00', especialista: 'IGNACIO SCHULZ',      paciente: 'FRANCISCA ROJAS',   rut: '9878782-1', prevision: 'FONASA'},
    {hora: '11:30', especialista: 'FEDERICO SUBERCASEAUX', paciente: 'PAMELA ESTRADA',  rut: '15345241-3', prevision: 'ISAPRE'},
    {hora: '15:00', especialista: 'FERNANDO WURTHZ',     paciente: 'ARMANDO LUNA',      rut: '16445345-9', prevision: 'ISAPRE'},
    {hora: '15:30', especialista: 'ANA MARIA GODOY',     paciente: 'MANUEL GODOY',      rut: '17666419-0', prevision: 'FONASA'},
    {hora: '16:00', especialista: 'PATRICIA SUAZO',      paciente: 'RAMON ULLOA',       rut: '14989389-K', prevision: 'FONASA'},
];

const traumatologia = [
    {hora: '8:00',  especialista: 'MARIA PAZ ALTUZARRA', paciente: 'PAULA SANCHEZ',     rut: '15554774-5', prevision: 'FONASA'},
    {hora: '10:00', especialista: 'RAUL ARAYA',          paciente: 'ANGÉLICA NAVAS',    rut: '15444147-9', prevision: 'ISAPRE'},
    {hora: '10:30', especialista: 'MARIA ARRIAGADA',     paciente: 'ANA KLAPP',         rut: '17879423-9', prevision: 'ISAPRE'},
    {hora: '11:00', especialista: 'ALEJANDRO BADILLA',   paciente: 'FELIPE MARDONES',   rut: '1547423-6', prevision: 'ISAPRE'},
    {hora: '11:30', especialista: 'CECILIA BUDNIK',      paciente: 'DIEGO MARRE',       rut: '16554741-K', prevision: 'FONASA'},
    {hora: '12:00', especialista: 'ARTURO CAVAGNARO',    paciente: 'CECILIA MENDEZ',    rut: '9747535-8', prevision: 'ISAPRE'},
    {hora: '12:30', especialista: 'ANDRES KANACRI',      paciente: 'MARCIAL SUAZO',     rut: '11254785-5', prevision: 'ISAPRE'},
];

const dental = [
    {hora: '8:30',  especialista: 'ANDREA ZUÑIGA',          paciente: 'MARCELA RETAMAL',rut: '11123425-6', prevision: 'ISAPRE'},
    {hora: '11:00', especialista: 'MARIA PIA ZAÑARTU',      paciente: 'ANGEL MUÑOZ',    rut: '9878789-2',  prevision: 'ISAPRE'},
    {hora: '11:30', especialista: 'SCARLETT WITTING',       paciente: 'MARIO KAST',     rut: '7998789-5',  prevision: 'FONASA'},
    {hora: '13:00', especialista: 'FRANCISCO VON TEUBER',   paciente: 'KARIN FERNANDEZ',rut: '18887662-K', prevision: 'FONASA'},
    {hora: '13:30', especialista: 'EDUARDO VIÑUELA',        paciente: 'HUGO SANCHEZ',   rut: '17665461-4', prevision: 'FONASA'},
    {hora: '14:00', especialista: 'RAQUEL VILLASECA',       paciente: 'ANA SEPULVEDA',  rut: '14441281-0', prevision: 'ISAPRE'},
];



//Agregar código para el desafio 2 aquí

// Nuevas horas de Traumatología
const nuevasHorasTraumatologia = [
    {hora: '09:00', especialista: 'RENÉ POBLETE',           paciente: 'ANA GELLONA',   rut: '13123329-7', prevision: 'ISAPRE'},
    {hora: '09:30', especialista: 'MARIA SOLAR',            paciente: 'RAMIRO ANDRADE',rut: '12221451-K', prevision: 'FONASA'},
    {hora: '10:00', especialista: 'RAUL LOYOLA',            paciente: 'CARMEN ISLA',   rut: '10112348-3', prevision: 'ISAPRE'},
    {hora: '10:30', especialista: 'ANTONIO LARENAS',        paciente: 'PABLO LOAYZA',  rut: '13453234-1', prevision: 'ISAPRE'},
    {hora: '12:00', especialista: 'MATIAS ARAVENA',         paciente: 'SUSANA POBLETE',rut: '14345656-6', prevision: 'FONASA'}
];

//Arreglo traumatologia
const copiaTraumatologia = [...traumatologia];

// Agregar las nuevas horas de Traumatología 
for (let i = 0; i < nuevasHorasTraumatologia.length; i++) {
    copiaTraumatologia.push(nuevasHorasTraumatologia[i]);
}

// Copiar el arreglo de Radiología 
const copiaRadiologia = [...radiologia];

// Eliminar el primer elemento del arreglo copiado
copiaRadiologia.shift();

// Eliminar el último elemento del arreglo copiado
copiaRadiologia.pop();


// Imprimir lista de consultas médicas de Dental
document.write('<h3>Consultas médicas de Dental:</h3>');
dental.forEach(consulta => {
    document.write(`<p>${consulta.hora} - ${consulta.especialista} - ${consulta.paciente} - ${consulta.rut} - ${consulta.prevision}</p>`);
});

// Imprimir listado de pacientes del centro médico
document.write('<h3>Listado total de pacientes:</h3>');
const pacientesTotales = [];
[copiaRadiologia, copiaTraumatologia, dental].forEach(consulta => {
    consulta.forEach(item => {
        pacientesTotales.push(item.paciente);
    });
});
pacientesTotales.forEach(paciente => {
    document.write(`<p>${paciente}</p>`);
});

  
//Agregar código para el desafio 2 aquí
document.write('<h3>Resumen atenciones:</h3>');
document.write(`<p>Cantidad de atenciones para Radiología: ${copiaRadiologia.length}</p>`);
document.write(`<p>Cantidad de atenciones para Traumatología: ${copiaTraumatologia.length}</p>`);
document.write(`<p>Cantidad de atenciones para Dental: ${dental.length}</p>`);


document.write(`<p>Primera atencion: ${copiaRadiologia[0].paciente} - ${copiaRadiologia[0].prevision} | Última atención: ${copiaRadiologia[copiaRadiologia.length -1].paciente} - ${copiaRadiologia[copiaRadiologia.length -1].prevision}.</p>`);
document.write(`<p>Primera atencion: ${copiaTraumatologia[0].paciente} - ${copiaTraumatologia[0].prevision} | Última atención: ${copiaTraumatologia[copiaTraumatologia.length -1].paciente} - ${copiaTraumatologia[copiaTraumatologia.length -1].prevision}.</p>`);
document.write(`<p>Primera atencion: ${dental[0].paciente} - ${dental[0].prevision} | Última atención: ${dental[dental.length -1].paciente} - ${dental[dental.length -1].prevision}.</p>`);




