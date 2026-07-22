/*========================
las variables xd
========================*/

let preguntaActual = 0;

let puntaje = 0;


const titulo = document.getElementById("titulo");

const contador = document.getElementById("contador");

const progreso = document.getElementById("progreso");

const pregunta = document.getElementById("pregunta");

const opciones = document.getElementById("opciones");

const reflexion = document.getElementById("reflexion");

const boton = document.getElementById("boton");

/*========================
preguntas preguntosas 
========================*/

const preguntas = [

    {

        pregunta:"Después de estudiar para un examen importante, tus amigos te invitan a una fiesta que termina muy tarde. ¿Qué harías?",

        opciones:[

            "Ir a la fiesta aunque mañana esté cansado.",

            "Descansar para rendir mejor en el examen."

        ],

        correcta:1,

        reflexion:"Elegir descansar implica renunciar a un placer inmediato para obtener un beneficio mayor en el futuro."

    },

    {

        pregunta:"Tienes dinero ahorrado para comprar un libro que necesitas, pero ves una oferta de un videojuego que te gusta mucho.",

        opciones:[

            "Comprar el videojuego inmediatamente.",

            "Guardar el dinero para el libro."

        ],

        correcta:1,

        reflexion:"Pensar en tus objetivos a largo plazo suele generar una satisfacción más duradera que una compra impulsiva."

    },

    {

        pregunta:"Recibes una notificación del celular mientras haces una tarea importante.",

        opciones:[

            "Revisar el celular inmediatamente.",

            "Terminar la tarea y revisar después."

        ],

        correcta:1,

        reflexion:"Controlar las distracciones fortalece la disciplina y ayuda a alcanzar metas importantes."

    },

    {

        pregunta:"Debes elegir entre comer solo comida rápida o preparar una comida más saludable.",

        opciones:[

            "Elegir la comida rápida.",

            "Preparar una comida saludable."

        ],

        correcta:1,

        reflexion:"Aunque la comida rápida brinda placer inmediato, cuidar la salud produce beneficios mucho más duraderos."

    },

    {

        pregunta:"Puedes pasar toda la tarde viendo redes sociales o dedicar una parte del tiempo a aprender una nueva habilidad.",

        opciones:[

            "Pasar toda la tarde en redes sociales.",

            "Aprender algo nuevo."

        ],

        correcta:1,

        reflexion:"Invertir tiempo en aprender desarrolla capacidades que traerán satisfacción y oportunidades en el futuro."

    }

];

/*========================
mostrar preguntas :v
========================*/

function mostrarPregunta(){

    const actual = preguntas[preguntaActual];

    

    contador.textContent =

    `Pregunta ${preguntaActual + 1} de ${preguntas.length}`;


    progreso.style.width =

    `${((preguntaActual + 1) / preguntas.length) * 100}%`;

    pregunta.textContent = actual.pregunta;


    opciones.innerHTML = "";


    reflexion.style.display = "none";

    reflexion.innerHTML = "";


    actual.opciones.forEach(function(opcion, indice){

        const botonOpcion = document.createElement("button");

        botonOpcion.className = "opcion";

        botonOpcion.textContent = opcion;

        botonOpcion.onclick = function(){

            responder(indice);

        };

        opciones.appendChild(botonOpcion);

    });

}

/*========================
RESPONDER
========================*/

function responder(indice){

    const actual = preguntas[preguntaActual];

    /* Si eligió la opción correcta */

    if(indice == actual.correcta){

        puntaje++;

    }

    /* Mostrar reflexión */

    reflexion.style.display = "block";

    reflexion.innerHTML =

    `<p>${actual.reflexion}</p>`;

    /* Desactivar los botones */

    const botones = document.querySelectorAll(".opcion");

    botones.forEach(function(boton){

        boton.disabled = true;

    });

    /* Cambiar botón */

    boton.style.display = "block";

    if(preguntaActual < preguntas.length - 1){

        boton.textContent = "Siguiente →";

    }

    else{

        boton.textContent = "Ver resultado";

    }

    boton.onclick = siguientePregunta;

}

/*========================
siguiente preguntosa :v
========================*/

function siguientePregunta(){

   

    preguntaActual++;


    if(preguntaActual < preguntas.length){

        boton.style.display = "none";

        mostrarPregunta();

    }

   

    else{

        mostrarResultado();

    }

}

/*========================
final xd
========================*/

function mostrarResultado(){

    

    titulo.textContent = "¡Actividad completada!";

   

    progreso.style.width = "100%";

    

    contador.textContent = "Cuestionario finalizado";

    pregunta.innerHTML =

    `Obtuviste <strong>${puntaje}</strong> de <strong>${preguntas.length}</strong> decisiones orientadas al bienestar.`;


    opciones.innerHTML = "";

   
    reflexion.style.display = "block";

    let mensaje = "";

    if(puntaje == preguntas.length){

        mensaje = `
        <h3>INCREIBLE :D </h3>

        <p>
        Has demostrado que comprendes muy bien la diferencia entre el placer inmediato
        y el bienestar a largo plazo. Tus decisiones reflejan bastante disciplina y previsión, lo cual es admirable.
        </p>
        `;

    }

    else if(puntaje >= 3){

        mensaje = `
        <h3>Muy Bien :)</h3>

        <p>
        En la mayoría de las situaciones elegiste opciones que favorecen un bienestar
        duradero. Aún que aun te falta un poco para perfeccionar tu capacidad de tomar 
        decisiones que prioricen la felicidad a largo plazo.
        </p>
        `;

    }

    else{

        mensaje = `
        <h3>Mal ahi ://</h3>

        <p>
        El hedonismo nos recuerda que no todos los placeres inmediatos producen una
        felicidad verdadera. Piensa cómo pequeñas decisiones pueden traer grandes
        beneficios en el futuro.
        </p>
        `;

    }

    reflexion.innerHTML = mensaje;

    boton.style.display = "block";

    boton.textContent = "Volver a intentar";

    boton.onclick = reiniciar;

}

/*========================
reiniciar xd
========================*/

function reiniciar(){

    preguntaActual = 0;

    puntaje = 0;

    

    titulo.textContent =

    "¿Placer inmediato o felicidad duradera?";

   

    boton.textContent = "Comenzar";

    boton.style.display = "block";

    
    progreso.style.width = "0%";

   

    reflexion.style.display = "none";

    reflexion.innerHTML = "";

    

    opciones.innerHTML = "";

    

    contador.textContent =

    `Pregunta 1 de ${preguntas.length}`;

    pregunta.textContent =

    "Presiona el botón para comenzar la actividad.";

    

    boton.onclick = iniciarActividad;

}

/*========================
INICIAR ACTIVIDAD
========================*/

function iniciarActividad(){

    boton.style.display = "none";

    mostrarPregunta();

}

boton.onclick = iniciarActividad;