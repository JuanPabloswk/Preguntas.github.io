//cargo en un arreglo las imganes de las preguntas. Este sera el orden que se mostrarán
let preguntas = ["p1.png", "p2.png", "p3.png", "p4.png", "p5.png", "p6.png", "p7.png", "p8.png"];

//arreglo que guardara la opcion correcta
let correcta = [1,0,2,2,0,1,2,1];

//arreglo que guardara las preguntas a mostrar en cada jugada
let opciones = [];
//cargo en el arreglo opciones las opciones a mostrar en cada jugada
opciones.push(["A los animales", "Que un Dios nos creo", "Que no existe Dios"]);
opciones.push(["mono", "gallinas", "reptiles"]);
opciones.push(["Tobias Wilson", "Nikola Tesla", "Charles Darwin"]);
opciones.push(["La ley del mas fuerte", "El relativismo", "Selección natural"]);
opciones.push(["Que todo fue creado por Dios", "Que la evolución no existe", "Que debemos obedecer a Dios"]);
opciones.push(["Jesus", "Adan", "Abel"]);
opciones.push(["Las riquezas del papa", "Que Jesus no esta vivo", "La falta de evidencia cientifica"]);
opciones.push(["Coelacanthimorpha", "Australopithecus", "Canis lupus familiaris"]);

//variable que guarda la posicion actual
let posActual = 0;
//variable que guarda la cantidad acertadas hasta el moemento
let cantidadAcertadas = 0;

function comenzarJuego(){
    //reseteamos las variables
    posActual = 0;
    cantidadAcertadas = 0;
    //activamos las pantallas necesarias
    document.getElementById("pantalla-inicial").style.display = "none";
    document.getElementById("pantalla-juego").style.display = "block";
    cargarPregunta();

}

//funcion que carga la siguiente pregunta y sus opciones
function cargarPregunta(){
    //controlo si se acabaron las preguntas
    if(preguntas.length <= posActual){
        terminarJuego();
    }
    else{//cargo las opciones
        //limpiamos las clases que se asignaron
        limpiarOpciones();

        document.getElementById("imgPregunta").src = "img/" + preguntas[posActual];
        document.getElementById("n0").innerHTML = opciones[posActual][0];
        document.getElementById("n1").innerHTML = opciones[posActual][1];
        document.getElementById("n2").innerHTML = opciones[posActual][2];
    }
}

function limpiarOpciones(){
    document.getElementById("n0").className = "nombre";
    document.getElementById("n1").className = "nombre";
    document.getElementById("n2").className = "nombre";

    document.getElementById("l0").className = "letra";
    document.getElementById("l1").className = "letra";
    document.getElementById("l2").className = "letra";
}

function comprobarRespuesta(opElegida){
    if(opElegida==correcta[posActual]){//acertó
        //agregamos las clases para colocar el color verde a la opcion elegida
        document.getElementById("n" + opElegida).className = "nombre nombreAcertada";
        document.getElementById("l" + opElegida).className = "letra letraAcertada";
        cantidadAcertadas++;
    }else{//no acerto
        //agramos las clases para colocar en rojo la opcion elegida
        document.getElementById("n" + opElegida).className = "nombre nombreNoAcertada";
        document.getElementById("l" + opElegida).className = "letra letraNoAcertada";

        //opcion que era correcta
        document.getElementById("n" + correcta[posActual]).className = "nombre nombreAcertada";
        document.getElementById("l" + correcta[posActual]).className = "letra letraAcertada";
    }
    posActual++;
    //Esperamos 1 segundo y pasamos mostrar la siguiente pregunta y sus opciones
    setTimeout(cargarPregunta,1000);
}
function terminarJuego(){
    //ocultamos las pantallas y mostramos la pantalla final
    document.getElementById("pantalla-juego").style.display = "none";
    document.getElementById("pantalla-final").style.display = "block";
    //agreamos los resultados
    document.getElementById("numCorrectas").innerHTML = cantidadAcertadas;
    document.getElementById("numIncorrectas").innerHTML = preguntas.length - cantidadAcertadas;
}

function volverAlInicio(){
    //ocultamos las pantallas y activamos la inicial
    document.getElementById("pantalla-final").style.display = "none";
    document.getElementById("pantalla-inicial").style.display = "block";
    document.getElementById("pantalla-juego").style.display = "none";
}