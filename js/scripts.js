let boxone = document.querySelector("#box1");
/**Con el Método "document.querySelector("#***")" llamamos por en Javascript a un Elemento de HTML por su ID, en este caso nuestro Elemento <DIV>.*/

boxone.addEventListener("click", changeColor);
/**Lo que hicimos arriba en Forma de Función es agregarle a Nuestro <div id="box"> un Escuchador De Eventos(Event Listener) y 2 Argumentos:_ 1ro El Evento en sí (en este caso es"click") y 2do lo que va a pasar al 
 * Detectarse el Evento(En este caso la Función "changeColor" que vamos a Definir a continuación).*/

function changeColor(){
    boxone.style.background = "red";
}
/**La Función changeColor de acá arriba cambia el Color de Nuestro <div id="box"> a Rojo.*/

/**TODO LO ANTERIOR FUÉ HECHO CON JAVASCRIPT NORMAL, AHORA ABAJO VAMOS A REPETIRLO PERO ACORTÁNDOLO USANDO JQUERY:_.*/

$("#box2").click(() => $("#box2").css({"background":"orange"}));

/**Lo que hicimos acá arriba fué Resumir el Código Anterior a Este de la Siguiente Manera:_ Con el "$("#***")" reemplazamos al "document.querySelector("#***")" , y con el posterior ".click(***)" reemplazamos al
 *  "***.addEventListener("click", ***)" donde entre los Paréntesis de ".click(***)" ponemos la Función a Ejecutar en Forma de Función Flecha de JS ES6 que sería el Reemplazo de "changeColor", 
 *  a la que finalmente Terminamos Resumiendo como "() => $("#box2").css({"background":"orange"})" . 
 * La Función ".css(***)" se utiliza en JQUERY para cambiar cualquier cosa relacionada a los Estilos y dentro de sus paréntesis de Usa la Notación de Objetos de JS ES6(Los Corchetes dentro del Paréntesis de la
 *  Función y la escritura en Forma de Elementos de Un Objeto dentro de ellos). 
 * EJEMPLO:_ .css({"background":"orange", 
 *                  "width": "400px", 
 *                  "heigth": "500px"}).*/

