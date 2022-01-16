const carrito = document.getElementById("carrito");
const template = document.getElementById("template");
const footer = document.getElementById("footer");
const templateFooter = document.getElementById("templateFooter");

const fragment = document.createDocumentFragment();

//Trabajaremos con delegación de eventos
document.addEventListener("click", (e) =>{
    // console.log(e.target.matches(".btn-outline-primary"));
    if (e.target.matches(".btn-outline-primary")){
        // console.log("ejecutar agregar al carrito");
        agregarAlCarrito(e)
    };

    // console.log(e.target.matches(".list-group-item .btn-success"));
    if (e.target.matches(".list-group-item .btn-success")){
        bntAumentar(e);
    };

    if (e.target.matches(".list-group-item .btn-danger")){
        btnDisminuir(e);
    }
});

//Para este ejercicio ya no haremos un objeto {} sino un array []

//Cambiamos de const a let para poder sobreescribir la variable en btnAumentar
let carritoObjeto = [];

const agregarAlCarrito = (e) => {
    // console.log(e.target.dataset.fruta);
    // console.log(e.target.dataset.precio);

    const producto = {
        titulo: e.target.dataset.fruta,
        id: e.target.dataset.fruta,
        cantidad: 1,
        precio: parseInt(e.target.dataset.precio),
    };

    // console.log(producto);

    const indice = carritoObjeto.findIndex((item) => item.id === producto.id);

    // console.log(indice);

    if(indice === -1){
        carritoObjeto.push(producto);
    } else {
        carritoObjeto[indice].cantidad ++;
        // carritoObjeto[indice].precio = carritoObjeto[indice].cantidad * producto.precio;
    }

    // console.log(carritoObjeto);

    pintarCarrito();

    pintarFooter();
};

const pintarCarrito = () => {
    carrito.textContent = "";
    
    carritoObjeto.forEach(item => {
        const clone = template.content.cloneNode(true);
        clone.querySelector(".text-white .lead").textContent = item.titulo;
        clone.querySelector(".badge").textContent = item.cantidad;
        clone.querySelector("div .lead span").textContent = item.precio * item.cantidad;

        //A cada botón le asignamos el id correspondiente
        clone.querySelector(".btn-danger").dataset.id = item.id;
        clone.querySelector(".btn-success").dataset.id = item.id;

        fragment.appendChild(clone);

    });

carrito.appendChild(fragment);

};

pintarFooter = () => {
    // console.log("pintar footer")
    footer.textContent ="";

    //con el ", 0" le indicamos a reduce que el resultado es un número 
    const total = carritoObjeto.reduce(
        (acc, current) => acc + current.cantidad * current.precio, 
        0
        );

    const clone = templateFooter.content.cloneNode(true);
    clone.querySelector("span").textContent = total;

    //No hay necesidad de fragment porque es un sólo ciclo por lo cual se puede agregar directamente
    footer.appendChild(clone);

    if (carritoObjeto.length === 0){
        footer.textContent = "";
    }
};

const bntAumentar = (e) => {
    // console.log("me diste click", e.target.dataset.id);
    carritoObjeto = carritoObjeto.map(item =>{
        if (item.id === e.target.dataset.id){
            item.cantidad ++;
        };
        return item;
    });

    pintarCarrito();

    pintarFooter()
};

const btnDisminuir = (e) => {
    // console.log("me diste click", e.target.dataset.id);

    //El filter es útil para borrar elementos
    carritoObjeto = carritoObjeto.filter(item =>{
        if (item.id === e.target.dataset.id){
            if (item.cantidad > 0 ){
                item.cantidad --;
                //la función return permite sacarlo del carrito cuando cumple con el if
                if (item.cantidad === 0) return;
                return item;
            };
        } else {return item};//Este último return retorno todos los demás items
    });

    pintarCarrito();

    pintarFooter()
};

