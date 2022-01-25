/*
Para instalar el modulo readline: https://www.npmjs.com/package/readline-sync
*/

/*
Para instalar el modulo colors: https://www.npmjs.com/package/colors
*/

// Dependencias para usar la libreria de readline-sync
var readlineSync = require('readline-sync');

// Dependencias para usar la libreria de colors
var colors = require('colors');

// Objeto usado como base de datos para la informacion del usuario
const datosPersona = {
    nombreApellido: '',
    nacionalidad: '',
    edad: '',
}


// -------------EJECUCION DEL SOFTWARE-------------
// Aceptacion de terminos y condiciones del programa a ejecutarse proximamente
if(readlineSync.keyInYN('Entiende usted que la finalidad de este verificador es ayudar a las autoridades del aeropuesto a tomar decisiones y asi evitar la propagacion del COVID-19?'.green)) {
    // Condicional para tomar los datos del usuario que ejecuta el programa o los de la persona a la que representa
    if(readlineSync.keyInYN(`${'#'.repeat(100)}\nEsta respondiendo por usted mismo?`.green)) {
        // Preguntas para tomar los datos personales
        datosPersona.nombreApellido = readlineSync.question('Cual es su nombre y apellido?  '.green);
        datosPersona.nacionalidad = readlineSync.question(`${'#'.repeat(100)}\nHola ${datosPersona.nombreApellido}, cual es tu nacionalidad?  `.green);
        datosPersona.edad = readlineSync.question(`${'#'.repeat(100)}\n${datosPersona.nombreApellido} que edad tienes?  `.green);

        // Condicional de la vacuna para entrar a la 2da fase del sistema (Condicional descartativa)
        if(readlineSync.keyInYN(`${'#'.repeat(100)}\n¿Está completamente vacunado contra el COVID-19? se considera completamente vacunado 2 semanas después de ponerse la segunda dosis de una serie de dos dosis, como en el caso de las vacunas Pfizer-BioNTech o Moderna; o 2 semanas después de ponerse una vacuna de una sola dosis, como en el caso de la vacuna Janssen de Johnson & Johnson.`.green)) {
            // Etapa 2 del software de autoverificacion de covid-19 (Etapa descartativa)
            if(readlineSync.keyInYN(`${'#'.repeat(100)}\n¿Tiene alguno de estos síntomas potencialmente mortales? Dificultad para respirar, dolor o presión persistentes en el pecho, Estado de confusión de aparición reciente, No puede despertarse o permanecer despierto y/o Color pálido, gris o azulado de la piel, los labios, o el lecho de las uñas, dependiendo del tono de piel`.green)) {
                console.log(`${'#'.repeat(100)}\nSegún sus síntomas, es posible que necesite atención médica de urgencia. vaya a la sala de emergencias del aeropuerto.`.red);
                datosPersona.razonDelRechazo = 'Necesita atencion medica';
            // Etapa 3 del software de autoverificacion de covid-19 (Etapa Descartativa)
            } else {
                if(readlineSync.keyInYN(`${'#'.repeat(100)}\nEn las últimas dos semanas, ¿tuvo contacto cercano con alguien que tuviera COVID-19? Excluya a las personas que habían tenido COVID-19 en los 3 meses anteriores.`.green)) {
                    console.log(`El pasajero no puede abordar`);
                } else {
                    console.log(`El pasajero puede abordar el avion`);
                }
            }
        } else {
            console.log(`${'#'.repeat(100)}\nUsted no es apto para abordar su vuelo ya que no cumple con los requisitos de vacunacion antes mencionados`.red);
            datosPersona.razonDelRechazo = 'No esta vacunado';
        }
    // Toma de datos de la persona a la que representa
    } else {
        // Preguntas para tomar los datos del 3ro al que representa
        datosPersona.nombreApellido = readlineSync.question('Cual es el nombre y apellido de la persona a la que representa?  '.green);
        datosPersona.nacionalidad = readlineSync.question(`${'#'.repeat(100)}\nHola ${datosPersona.nombreApellido}, cual es su nacionalidad?  `.green);
        datosPersona.edad = readlineSync.question(`${'#'.repeat(100)}\n${datosPersona.nombreApellido} que edad tiene?  `.green);

        // Condicional de la vacuna para entrar a la 2da fase del sistema
        if(readlineSync.keyInYN(`${'#'.repeat(100)}\n¿Está completamente vacunado contra el COVID-19? se considera completamente vacunado 2 semanas después de ponerse la segunda dosis de una serie de dos dosis, como en el caso de las vacunas Pfizer-BioNTech o Moderna; o 2 semanas después de ponerse una vacuna de una sola dosis, como en el caso de la vacuna Janssen de Johnson & Johnson.`.green)) {
            if(readlineSync.keyInYN(`${'#'.repeat(100)}\n¿Tiene alguno de estos síntomas potencialmente mortales? Dificultad para respirar, dolor o presión persistentes en el pecho, Estado de confusión de aparición reciente, No puede despertarse o permanecer despierto y/o Color pálido, gris o azulado de la piel, los labios, o el lecho de las uñas, dependiendo del tono de piel`.green)) {
                console.log(`${'#'.repeat(100)}\nSegún sus síntomas, es posible que necesite atención médica de urgencia. vaya a la sala de emergencias del aeropuerto.`.red);
                datosPersona.razonDelRechazo = 'Necesita atencion medica';
            // Etapa 3 del software de autoverificacion de covid-19 (Etapa Descartativa)
            } else {
                console.log("entrando en etapa 3".green);
            }
        } else {
            console.log(`${'#'.repeat(100)}\nUsted no es apto para abordar su vuelo ya que no cumple con los requisitos de vacunacion antes mencionados`.red);
            datosPersona.razonDelRechazo = 'No esta vacunado';
        }
    }
// Mensaje mostrado si los terminos y condiciones iniciales no son aceptados
} else {
    console.log(`${'#'.repeat(100)}\nEs obligatorio que usted realice este verificador de manera satisfactoria para poder seguir al siguiente proceso del abordaje a su vuelo`)
}

console.log({datosPersona});