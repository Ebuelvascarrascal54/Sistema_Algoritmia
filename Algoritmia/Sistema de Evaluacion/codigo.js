var pregunta = {
    pregunta : "En que año descubrio Colón America",
    opciones : "1894,1492,1623,1925",
    correcta : 1,
    puntuacion : 1
}

var pregunta2 = {
    pregunta : "Cualesa son los colores de la badera de Colombia",
    opciones : "Amarillo-Azul-Rojo,Verde-Rojo-Violeta,Fucsia-Naranja",
    correcta : 0,
    puntuacion : 1
}

var pregunta3 = {
    pregunta : "¿Quién es el autor de el Quijote?",
    opciones : "Isaac Asimov,Gabriel García Márquez,Miguel de Cervantes",
    correcta : 2,
    puntuacion : 1
}

var pregunta4 = {
    pregunta : "¿Cómo se denomina el resultado de la multiplicación?",
    opciones : "Signo,producto,Factores",
    correcta : 1,
    puntuacion : 1
}

var pregunta5 = {
    pregunta : "¿Cuál es el océano más grande?",
    opciones : "Océano Atlántico,Océano Pacífico,Océano Índico",
    correcta : 1,
    puntuacion : 1
}

var pregunta6 = {
    pregunta : "¿Cómo se llama el animal más rápido del mundo?",
    opciones : "El guepardo,La Jirafa, El leon",
    correcta : 0,
    puntuacion : 1
}

//Pregunta 1

var trozos = pregunta.opciones.split(",");
document.getElementById("pregunta").innerHTML = pregunta.pregunta;
document.getElementById("t_opc1").innerHTML = trozos[0];
document.getElementById("t_opc2").innerHTML = trozos[1];
document.getElementById("t_opc3").innerHTML = trozos[2];
document.getElementById("t_opc4").innerHTML = trozos[3];

document.getElementById("opc1_1").value = trozos[0];
document.getElementById("opc1_2").value = trozos[1];
document.getElementById("opc1_3").value = trozos[2];
document.getElementById("opc1_4").value = trozos[3];

//Pregunta 2

var trozos = pregunta2.opciones.split(",");
document.getElementById("pregunta2").innerHTML = pregunta2.pregunta;
document.getElementById("t2_opc1").innerHTML = trozos[0];
document.getElementById("t2_opc2").innerHTML = trozos[1];
document.getElementById("t2_opc3").innerHTML = trozos[2];


document.getElementById("opc1_1").value = trozos[0];
document.getElementById("opc1_2").value = trozos[1];
document.getElementById("opc1_3").value = trozos[2];

//Pregunta 3

var trozos = pregunta3.opciones.split(",");
document.getElementById("pregunta3").innerHTML = pregunta3.pregunta;
document.getElementById("t3_opc1").innerHTML = trozos[0];
document.getElementById("t3_opc2").innerHTML = trozos[1];
document.getElementById("t3_opc3").innerHTML = trozos[2];


document.getElementById("opc1_1").value = trozos[0];
document.getElementById("opc1_2").value = trozos[1];
document.getElementById("opc1_3").value = trozos[2];

//Pregunta 4

var trozos = pregunta4.opciones.split(",");
document.getElementById("pregunta4").innerHTML = pregunta4.pregunta;
document.getElementById("t4_opc1").innerHTML = trozos[0];
document.getElementById("t4_opc2").innerHTML = trozos[1];
document.getElementById("t4_opc3").innerHTML = trozos[2];


document.getElementById("opc1_1").value = trozos[0];
document.getElementById("opc1_2").value = trozos[1];
document.getElementById("opc1_3").value = trozos[2];

//Pregunta 5

var trozos = pregunta5.opciones.split(",");
document.getElementById("pregunta5").innerHTML = pregunta5.pregunta;
document.getElementById("t5_opc1").innerHTML = trozos[0];
document.getElementById("t5_opc2").innerHTML = trozos[1];
document.getElementById("t5_opc3").innerHTML = trozos[2];


document.getElementById("opc1_1").value = trozos[0];
document.getElementById("opc1_2").value = trozos[1];
document.getElementById("opc1_3").value = trozos[2];

//Pregunta 6

var trozos = pregunta6.opciones.split(",");
document.getElementById("pregunta6").innerHTML = pregunta6.pregunta;
document.getElementById("t6_opc1").innerHTML = trozos[0];
document.getElementById("t6_opc2").innerHTML = trozos[1];
document.getElementById("t6_opc3").innerHTML = trozos[2];


document.getElementById("opc1_1").value = trozos[0];
document.getElementById("opc1_2").value = trozos[1];
document.getElementById("opc1_3").value = trozos[2];


function evaluar()
{
   
}