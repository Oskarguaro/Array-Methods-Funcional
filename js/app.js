//con getElementById no necesita el #
const carrito = document.getElementById("carrito");
const template = document.getElementById("template");

const fragment = document.createDocumentFragment();
const botones = document.querySelectorAll(".card .btn-sub");

const btnTotal = document.querySelector(".btn-total");

//Para este ejercicio ya no haremos un objeto {} sino un array []

const carritoObjeto = [];

//El dataset permite llamar al data-fruta del HTML y con fruta solo el texto contenido
const agregarAlCarrito = (e) => {
    // console.log(e.target.dataset.fruta);
    // console.log(e.target.dataset.precio);

    const producto = {
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad: 1,
    };

    const indice = carritoObjeto.findIndex((item) => item.id === producto.id);

    console.log(indice);

    if(indice === -1){
        carritoObjeto.push(producto);
    } else {
        carritoObjeto[indice].cantidad ++;
    }

    console.log(carritoObjeto);

    pintarCarrito(carritoObjeto);
};

const pintarCarrito = (array) => {
    carrito.textContent = "";
    
    array.forEach(item => {
        const clone = template.content.cloneNode(true);
        clone.querySelector(".lead").textContent = item.titulo;
        clone.querySelector(".badge").textContent = item.cantidad;

        fragment.appendChild(clone);

    });

carrito.appendChild(fragment);

};

botones.forEach(btn => btn.addEventListener("click", agregarAlCarrito));
