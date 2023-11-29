
// ESTO FUE HECHO PARA PROBAR SI ANDA EL BOOTSTRAP EN MI ARCHIVO app.js, SIN TOCAR MIS ESTILOS CSS, HASTA EL MOMENTO NO SE ME OCURRE NADA APARTE DE QUE SI SE HACE CLICK AL BOTÓN APAREZCA ALGO Y LO PUEDA CERRAR CON OTRO BOTÓN (cada vez que se haga click se repite esa alerta), es lo único que se me ocurre sin que bootstrap toque los estilos css, los cuales definiré en mis estilos.css 
//Primero se cre una constante de nombre: alertPlaceholder almacenara un selector de JS id, que trajimos desde mi index.html.

//Luego creamos una constante de nombre (appendAlert) y la añadimos a una función flecha con dos parámetros (message, type) y la flecha que aclara que es una función flecha, abrimos llaves{y dentro se creo una constante de nombre wrapper que almacena un nuevo elemento HTML creado por el método "document.createElement"(crea un elementoHTML) que creo un div, luego en la misma constante "wrapper" que almacena un "div" con la propiedad innerHTML agregamos dentro de éste "div" un array[que tendrá un div con una clase="alert alert-${type} alert-dismissible" role="alert" y dentro de éste div creamos otro <div> que contendrá el mensaje que queramos mostrar</div> y luego agregamos un botón y dentro de ese botón una imagen que es el icono par cerrar el mensaje] fuera del array agregamos El método JavaScript join() que combina todos los elementos del arreglo(array) en una cadena. Luego con el método .append añadimos el valor de la constante "wrapper" a la constante "alertPlaceholder" que contiene el selector de nuestro div que esta en nuestro archivo index.html}. 
//Luego creamos una constante de nombre alertTrigger que contendrá la selección por id de nuestro botón que nos mostrara el contenido de la alerta. Luego declaramos una condicional que (if)si se cumple la condición que va entre paréntesis, que seria (alertTrigger) y dentro de las llaves{le asignamos el método alertTrigger.addEventListener que esta atento a que cuando el usuario haga click en el botón ejecute (una función flecha que contendrá la llamada de la función appendAlert: y definimos el evento del parámetros (type) que seria el (success) que indicamos la función que se ejecuta cuando finalizó el envío de datos del servidor y además ocurrió todo en forma correcta (en nuestro caso recuperamos el dato devuelto y lo mostramos en la página))}   




const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
const appendAlert = (type) => {
  const wrapper = document.createElement('div')/*El document.createElement crea un elemento HTML especificado por su tagName, o un HTMLUnknownElement(en-US) si su tagName no se reconoce*/ 
  wrapper.innerHTML /*.innerHTML devuelve o establece la sintaxis HTML describiendo los descendientes del elemento.Nos permite leer un dato o asignarlo al contenido de un div o bien, del mismo control.Nos facilita la asignación de valores a controles.*/ = [/*Esto es un arreglo*/
    `<div id="contenedorAlert" class="alert alert-${type} alert-dismissible" role="alert">`,/*Utilizamos las comillas invertidas o backticks ``:(nos permiten además ingresar expresiones dentro del string envolviéndolos en ${…},Otra ventaja de usar backticks es que nos permiten extender en múltiples líneas el string:) para crear las plantillas literales.
     El formato ${} nos permite insertar un valor dinámico en la cadena. Todo lo que hay dentro ${} es evaluado como JavaScript; es una interpolación de elementos.
     El atributo (role) describe la función de un elemento en programas que puedan hacer uso de él, tales como lectores de pantallas o magnificadores, en este caso en vez de leerlo como un (div) los navegadores lo leerán como un (alert)*/
     //ACÁ AGREGUE LA IMAGEN DE MI LOGO PARA QUE APAREZCA Y DESAPAREZCA CON EL BOTÓN DE CERRAR. TAMBIÉN DENTRO DEL BOTÓN AGREGUE UN ICONO CON UN BOTÓN DE CIERRE   
    `   <div><img id="mi_logo_alert_js" src="icons-logo-imgs/Mi logo SLL 1.0.png" alt="logo SLL de SandriLucasLeonardo"></div>`,
    '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"><img class="x-icono-cerrar-alert" src="icons-logo-imgs/icons8-x-96.png" alt="icons8-x-96"></button>',
    '</div>'/*Las comillas simples ' son la misma cosa que las dobles " se pueden usar una dentro de otras como en éste caso para que el programa entienda lo que queramos hacer*/
  ].join('')/*El método JavaScript join() combina todos los elementos del arreglo en una cadena.*/

  alertPlaceholder.append(wrapper)
}/* El método (.append) nos permite adjuntar un objeto nodo o un DOMString después del último elemento hijo del elemento padre. Dicho de otra forma, podremos añadir dentro de un elemento padre (un div, un párrafo, etc) otro nuevo elemento o una cadena de texto.*/


const alertTrigger = document.getElementById('liveAlertBtn')
if (alertTrigger) {
  alertTrigger.addEventListener('click', () => {
    appendAlert('success')/*aca definimos el parámetro de type:success = tipo:éxito, que indicamos la función que se ejecuta cuando finalizó el envío de datos del servidor y además ocurrió todo en forma correcta*/
  })
}

/*EL (.addEventListener) es un escuchador que indica al navegador que este atento a la interacción del usuario*/