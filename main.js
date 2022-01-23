/*
Para instalar el modulo readline: https://www.npmjs.com/package/readline-sync
*/

// Dependencias para usar el modulo readline-sync
var readlineSync = require('readline-sync');

// Objeto usado como base de datos para la informacion del usuario
const datosPersona = {
    nombreApellido: '',
    nacionalidad: '',
    edad: '',
}


// -------------EJECUCION DEL SOFTWARE-------------
// Aceptacion de terminos y condiciones del programa a ejecutarse proximamente
if(readlineSync.keyInYN('Entiende usted que la finalidad de este verificador es ayudar a las autoridades del aeropuesto a tomar decisiones y asi evitar la propagacion del COVID-19?')) {
    // Condicional para tomar los datos del usuario que ejecuta el programa o los de la persona a la que representa
    if(readlineSync.keyInYN(`${'#'.repeat(100)}\nEsta respondiendo por usted mismo?`)) {
        // Preguntas para tomar los datos personales
        datosPersona.nombreApellido = readlineSync.question('Cual es su nombre y apellido?  ');
        datosPersona.nacionalidad = readlineSync.question(`${'#'.repeat(100)}\nHola ${datosPersona.nombreApellido}, cual es tu nacionalidad?  `);
        datosPersona.edad = readlineSync.question(`${'#'.repeat(100)}\n${datosPersona.nombreApellido} que edad tienes?  `);

        // Condicional de la vacuna para entrar a la 2da fase del sistema
        if(readlineSync.keyInYN(`${'#'.repeat(100)}\n¿Está completamente vacunado contra el COVID-19? se considera completamente vacunado 2 semanas después de ponerse la segunda dosis de una serie de dos dosis, como en el caso de las vacunas Pfizer-BioNTech o Moderna; o 2 semanas después de ponerse una vacuna de una sola dosis, como en el caso de la vacuna Janssen de Johnson & Johnson.`)) {
            console.log(`${'#'.repeat(100)}\ninicio de la 2da fase del programa`);
        } else {
            console.log(`${'#'.repeat(100)}\nUsted no es apto para abordar su vuelo ya que no se encuentra vacunado`);
        }
    // Toma de datos de la persona a la que representa
    } else {
        // Preguntas para tomar los datos del 3ro al que representa
        datosPersona.nombreApellido = readlineSync.question('Cual es el nombre y apellido de la persona a la que representa?  ');
        datosPersona.nacionalidad = readlineSync.question(`${'#'.repeat(100)}\nHola ${datosPersona.nombreApellido}, cual es su nacionalidad?  `);
        datosPersona.edad = readlineSync.question(`${'#'.repeat(100)}\n${datosPersona.nombreApellido} que edad tiene?  `);

        // Condicional de la vacuna para entrar a la 2da fase del sistema
        if(readlineSync.keyInYN(`${'#'.repeat(100)}\n¿Está completamente vacunado contra el COVID-19? se considera completamente vacunado 2 semanas después de ponerse la segunda dosis de una serie de dos dosis, como en el caso de las vacunas Pfizer-BioNTech o Moderna; o 2 semanas después de ponerse una vacuna de una sola dosis, como en el caso de la vacuna Janssen de Johnson & Johnson.`)) {
            console.log(`${'#'.repeat(100)}\ninicio de la 2da fase del programa`);
        } else {
            console.log(`${'#'.repeat(100)}\nUsted no es apto para abordar su vuelo ya que no se encuentra vacunado`);
        }
    }
// Mensaje mostrado si los terminos y condiciones iniciales no son aceptados
} else {
    console.log(`${'#'.repeat(100)}\nEs obligatorio que usted realice este verificador de manera satisfactoria para poder seguir al siguiente proceso del abordaje a su vuelo`)
}

console.log({datosPersona});