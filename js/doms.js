// const padre = document.querySelector(".border-primary");
// const hijo = document.querySelector(".border-secondary");
// const nieto = document.querySelector(".border-danger");

// //Cuando se hace clic sobre padre ejecuta el evento y aparece el mensaje en consola
// padre.addEventListener("click", () => {
//     console.log("me diste click padre");
// });

// //Al ejecutar el evento se ejecuta padre e hijo y aparecen dos mensajes
// hijo.addEventListener("click", () => {
//     console.log("me diste click hijo");
// });

// //Al hacer click aparecen tres mensajes padre, hijo y nieto o sea que se propaga el evento, a esto se le llama "fase de burbujeo"
// nieto.addEventListener("click", () => {
//     console.log("me diste click nieto");
// });


//Cuando se hace el proceso inverso se llama fase de captura y esto se hace se agrega el parámetro "true" que por defecto esta en "false"
// padre.addEventListener("click", () => {
//     console.log("me diste click padre");
// }, true);

// hijo.addEventListener("click", () => {
//     console.log("me diste click hijo");
// }, true);

// nieto.addEventListener("click", () => {
//     console.log("me diste click nieto");
// }, true);







// //Cuando queramos evitar el burbujeo
// const cajitas = document.querySelectorAll(".border");

// //Con burbujeo y forEach, pero agregando el evento "e" y el métdo stopPropagation detiene el burbujeo y solo aparece un mensaje
// cajitas.forEach(caja => {
//     caja.addEventListener("click", (e) => {
//         e.stopPropagation();
//         console.log("me diste click");
//     });
// });






// //Uso de prevenDefault detiene o cancelo un evento
// const formulario = document.querySelector("form");

// //En este caso el evento submit tiene por defecto (default) enviar la info por get del navegador y por eso no se alcanza a visualizar en la consola (ademas intenta remitir a una URL y agrega un parámetro name= del input del formulario a la dirección), pero cancelando ese evento ya deja ver el mensaje en consola
// formulario.addEventListener("submit", (e) => {
//     console.log("me diste click");
//     e.preventDefault();
// });


// //Lo mismo ocurre con el ancla, se puede evitar viajar a la ref="" del ancla
// const ancla = document.querySelector("a");

// ancla.addEventListener("click", () => {
//     console.log("me diste click");
//     e.preventDefault();
// });






//Delegación de Eventos, evita estar usando addEventListener en cada elemento, a través del e.target damos condiciones para generar eventos
// const container = document.querySelector(".container");

// container.addEventListener("click", (e) => {
//     // console.log(e.target.id);

//     if (e.target.id === "padre") {
//         console.log("click en padre");
//     };

//     //El parámetro matches devuelve un true o false si se cumple la condición, en este caso es selecionar el target class="border-secondary"
//     console.log(e.target.matches(".border-secondary"));

//     if (e.target.matches(".border-secondary")){
//         console.log("click en hijo");
//     };

//     //Con dataset accedemos al data- del HTML 
//     console.log(e.target.dataset.div);

//     if (e.target.dataset.div === "Nieto"){
//         console.log("click en nieto");
//     };
// });


//IMPORTANTE: Muchos no usan ningún contenedor sino que aplican el addEvenListener a todo el documento y funciona exactamente igual, porque se usan las propiedades del HTML (id, class, data, etc)

document.addEventListener("click", (e) => {
    // console.log(e.target.id);

    if (e.target.id === "padre") {
        console.log("click en padre");
    };

    //El parámetro matches devuelve un true o false si se cumple la condición, en este caso es selecionar el target class="border-secondary"
    // console.log(e.target.matches(".border-secondary"));

    if (e.target.matches(".border-secondary")){
        console.log("click en hijo");
    };

    //Con dataset accedemos al data- del HTML 
    // console.log(e.target.dataset.div);

    if (e.target.dataset.div === "Nieto"){
        console.log("click en nieto");
    };
});