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

// -------------VARIABLES DE UTILIDAD-------------
const separador = '#'.repeat(100);

const terminosCondiciones = 'Entiende usted que la finalidad de este verificador es ayudar a las autoridades del aeropuesto a tomar decisiones y asi evitar la propagacion del COVID-19?';

const condicionalVacuna = '¿Está completamente vacunado contra el COVID-19? se considera completamente vacunado 2 semanas después de ponerse la segunda dosis de una serie de dos dosis, como en el caso de las vacunas Pfizer-BioNTech o Moderna; o 2 semanas después de ponerse una vacuna de una sola dosis, como en el caso de la vacuna Janssen de Johnson & Johnson.';

const condicionalSintomas = '¿Tiene alguno de estos síntomas potencialmente mortales? Dificultad para respirar, dolor o presión persistentes en el pecho, Estado de confusión de aparición reciente, No puede despertarse o permanecer despierto y/o Color pálido, gris o azulado de la piel, los labios, o el lecho de las uñas, dependiendo del tono de piel';

const contactoDirecto = 'En las últimas dos semanas, ¿tuvo contacto cercano con alguien que tuviera COVID-19? Excluya a las personas que habían tenido COVID-19 en los 3 meses anteriores.';



// -------------EJECUCION DEL SOFTWARE-------------
// Aceptacion de terminos y condiciones del programa a ejecutarse proximamente (True[y] / False[n])
if(readlineSync.keyInYN(`${terminosCondiciones}`.green)) {

    // Condicional para tomar los datos del usuario o los de la persona a la que representa (True[y] / False[n])
    if(readlineSync.keyInYN(`${separador}\nEsta respondiendo por usted mismo?`.green)) {

        // Preguntas para tomar los datos personales
        datosPersona.nombreApellido = readlineSync.question('Cual es su nombre y apellido?  '.green);
        datosPersona.nacionalidad = readlineSync.question(`${separador}\nHola ${datosPersona.nombreApellido}, cual es tu nacionalidad?  `.green);
        datosPersona.edad = readlineSync.question(`${separador}\n${datosPersona.nombreApellido} que edad tienes?  `.green);
        
        // Condicional de la vacuna 1ra etapa del sistema (Condicional descartativa) (True[y] / False[n])
        if(readlineSync.keyInYN(`${separador}\n${condicionalVacuna}`.green)) {

            // Etapa 2 del software de autoverificacion de covid-19 (Etapa descartativa)
            if(readlineSync.keyInYN(`${separador}\n${condicionalSintomas}`.green)) {

                // Descarte por sintomas de covid-19
                console.log(`${separador}\nSegún sus síntomas, es posible que necesite atención médica de urgencia. vaya a la sala de emergencias del aeropuerto.`.red);

                // Inyeccion de la razon al objeto de los datos del usuario
                datosPersona.razonDelRechazo = 'Necesita atencion medica';

            // Etapa 3 del software de autoverificacion de covid-19 (Etapa Descartativa)
            } else {
                if(readlineSync.keyInYN(`${separador}\n${contactoDirecto}`.green)) {

                    // Descarte por contacto directo con una persona Covid-19 positivo
                    console.log(`El sistema determino que usted representa un riesgo para la salud publica de la nacion, por lo que no puede abordar el vuelo correspondiente, le pedimos que se dirija de manera inmediata a la sala de emergencias del aeropuerto`.red);

                    // Inyeccion de la razon al objeto de los datos del usuario
                    datosPersona.razonDelRechazo = 'Contanto directo con una persona covid-19 positivo';

                // El sistema determina que no se corren riesgos de COVID-19 con este pasajero
                } else {
                    console.log(`El sistema determino que usted no representa un riesgo para la salud publica de la nacion, por lo que puede abordar el vuelo correspondiente, le deseamos un feliz viaje`.blue);
                }
            }

        // Descarte de abordaje por no cumplir con los requisitos de vacunacion
        } else {
            console.log(`${separador}\nUsted no es apto para abordar su vuelo ya que no cumple con los requisitos de vacunacion antes mencionados`.red);

            // Inyeccion de la razon al objeto de los datos del usuario
            datosPersona.razonDelRechazo = 'No esta vacunado';
        }

    // Toma de datos de la persona a la que representa
    } else {

        // Preguntas para tomar los datos del 3ro al que representa
        datosPersona.nombreApellido = readlineSync.question('Cual es el nombre y apellido de la persona a la que representa?  '.green);
        datosPersona.nacionalidad = readlineSync.question(`${separador}\nHola ${datosPersona.nombreApellido}, cual es su nacionalidad?  `.green);
        datosPersona.edad = readlineSync.question(`${separador}\n${datosPersona.nombreApellido} que edad tiene?  `.green);

        // Condicional de la vacuna 1ra etapa del sistema (Condicional descartativa) (True[y] / False[n])
        if(readlineSync.keyInYN(`${separador}\n${condicionalVacuna}`.green)) {

            // Etapa 2 del software de autoverificacion de covid-19 (Etapa descartativa)
            if(readlineSync.keyInYN(`${separador}\n${condicionalSintomas}`.green)) {

                // Descarte por sintomas de covid-19
                console.log(`${separador}\nSegún sus síntomas, es posible que necesite atención médica de urgencia. vaya a la sala de emergencias del aeropuerto.`.red);

                // Inyeccion de la razon al objeto de los datos del usuario
                datosPersona.razonDelRechazo = 'Necesita atencion medica';

            // Etapa 3 del software de autoverificacion de covid-19 (Etapa Descartativa)
            } else {
                if(readlineSync.keyInYN(`${separador}\n${contactoDirecto}`.green)) {

                    // Descarte por contacto directo con una persona Covid-19 positivo
                    console.log(`El sistema determino que usted representa un riesgo para la salud publica de las naciones, por lo que no puede abordar a el vuelo correspondiente, le pedimos que se dirija de manera inmediata a la sala de emergencias del aeropuerto`.red);

                    // Inyeccion de la razon al objeto de los datos del usuario
                    datosPersona.razonDelRechazo = 'Contanto directo con una persona covid-19 positivo';
                } else {

                    // El sistema determina que no se corren riesgos de COVID-19 con este pasajero
                    console.log(`El sistema determino que usted no representa un riesgo para la salud publica de las naciones, por lo que puede abordar a el vuelo correspondiente, le deseamos un feliz viaje`.blue);
                }
            }
        } else {

            // Descarte de abordaje por no cumplir con los requisitos de vacunacion
            console.log(`${separador}\nUsted no es apto para abordar su vuelo ya que no cumple con los requisitos de vacunacion antes mencionados`.red);

            // Inyeccion de la razon al objeto de los datos del usuario
            datosPersona.razonDelRechazo = 'No esta vacunado';
        }
    }

// Mensaje mostrado si los terminos y condiciones iniciales no son aceptados
} else {
    console.log(`${separador}\nEs obligatorio que usted realice este verificador de manera satisfactoria para poder seguir al siguiente proceso del abordaje a su vuelo`)
}

console.log({datosPersona});