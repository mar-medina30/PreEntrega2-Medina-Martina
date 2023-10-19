const Libros = [
    {id: 1, nombre: "La casa en el mar más azul", categoría: "Juvenil", genero: "Fantasía", autor: "TJ Klune", editorial: "Crossbooks", envio: "Gratis", precio: 6800},
    {id: 2, nombre: "Los siete maridos de Evelyn Hugo", categoría: "Juvenil", genero: "Romántico", autor: "Taylor Jenkins Reid", editorial: "Umbriel", envio: "Gratis", precio: 6200},
    {id: 3, nombre: "El chico que dibujaba constelaciones", categoría: "Juvenil", genero: "Romántico", autor: "TJ Klune", editorial: "Planeta", envio: 400, precio: 4800},
    {id: 4, nombre: "Nosotros en la luna", categoría: "Juvenil", genero: "Romántico", autor: "Alice Kellen", editorial: "Planeta", envio: 400, precio: 6900},
    {id: 5, nombre: "Los dos amores de mi vida", categoría: "Juvenil", genero: "Romántico", autor: "Taylor Jenkins Reid", editorial: "Titania", envio: "Gratis", precio: 6200},
    {id: 6, nombre: "El mapa de los anhelos", categoría: "Juvenil", genero: "Romántico", autor: "Alice Kellen" , editorial: "Planeta", envio: 400, precio: 6900},
    {id: 7, nombre: "Antes de diciembre", categoría: "Juvenil", genero: "Romántico", autor: "Joana Marcus", editorial: "Montena", envio: "Gratis", precio: 7200},
    {id: 8, nombre: "La vida invisible de Addie LaRue", categoría: "Juvenil", genero: "Fantasía", autor: "Victoria Schwab", editorial: "Umbriel", envio: 400 , precio: 8000},
    {id: 9, nombre: "El Ladron Del Rayo - Percy Jackson 1", categoría: "Juvenil", genero: "Fantasía", autor: "Rick Riordan", editorial: "Salamandra", envio: "Gratis", precio: 4900},
    {id: 10, nombre: "Asesino de brujas 1: La bruja blanca", categoría: "Juvenil", genero: "Fantasía", autor: "Shelby Mahurin", editorial: "Puck", envio: 400, precio: 6900},
    {id: 11, nombre: "Despierta", categoría: "Bienestar", genero: "Autoayuda", autor: "Lorena Pronsky", editorial: "Vergara", envio: "Gratis", precio: 5800},
    {id: 12, nombre: "Rota se camina igual", categoría:"Bienestar", genero: "Autoayuda", autor: "Lorena Pronsky", editorial: "Vergara", envio: "Gratis", precio: 5500 },
    {id: 13, nombre: "Encuentra Tu Persona Vitamina", categoría: "Bienestar", genero: "Autoayuda", autor: "Marian Rojas Estapé", editorial: "Espasa", envio: 400, precio: 5800},
    {id: 14, nombre: "El sutil arte de que (casi todo) te importe una mierda", categoría: "Bienestar", genero: "Autoayuda", autor: "Mark Manson", editorial: "HarperCollins", envio: 400, precio: 5400},
    {id: 15, nombre: "Te espero en el fin del mundo", categoría: "Juvenil", genero: "Romántico", autor: "Andrea Longarela", editorial: "Crossbooks", envio: "Gratis", precio: 6900},
    {id: 16, nombre: "No amarás", categoría: "Bienestar", genero: "Autoayuda", autor: "Lorena Pronsky", editorial: "Vergara", envio: "Gratis", precio: 6000},
    {id: 17, nombre: "Uno siempre cambia al amor de su vida (Por otro amor o por otra vida)", categoría: "Bienestar", genero: "Autoayuda", autor: "Amalia Andrade Arango", editorial: "Planeta", envio: 400, precio: 5500},
    {id: 18, nombre: "Este dolor no es mío", categoría:"Bienestar", genero: "Autoayuda", autor: "Mark Wolynn", editorial: "Gaia Ediciones", envio: "Gratis", precio: 5500},
    {id: 19, nombre: "Flores en el barro", categoría: "Bienestar", genero: "Autoayuda", autor: "Lorena Pronsky", editorial: "Vergara", envio: "Gratis", precio: 5200},
    {id: 20, nombre: "Cuando no queden más estrellas que contar", categoría: "Juvenil", genero: "Romántico", autor: "María Martínez", editorial: "Crossbooks", envio: 400, precio: 7200},
    {id: 21, nombre: "Saga Heartstopper", categoría: "Sagas", genero: "Romántico", autor: "Alice Oseman", editorial: "Vergara Y Riba", envio: "Gratis", precio: 30000},
    {id: 22, nombre: "Saga Percy Jackson", categoría: "Sagas", genero: "Fantasía", autor: "Rick Riordan", editorial: "Salamandra", envio: "Gratis", precio: 35000},
    {id: 23, nombre: "Saga Ciudad medialuna", categoría: "Sagas", genero: "Fantasía", autor: "Sarah J. Maas", editorial: "Alfaguara", envio: "Gratis", precio: 25000},
    {id: 24, nombre: "Saga Asesino de Brujas", categoría: "Sagas", genero: "Fantasía", autor: "Shelby Mahurin", editorial: "Puck", envio: "Gratis", precio: 24000},
]

const filtrar = () => prompt("Cómo desea filtrar los productos? (género, categoría, precio)");
const precioMinimo = () => prompt("Ingrese el precio mínimo entre 4800 y 35000");
const precioMaximo = () => prompt("Ingrese el precio máximo entre 4800 y 35000");
const generoFiltrado = () => prompt("Ingrese el género literario: Rómantico, Fantasía o Autoayuda");
const categoriaFiltrado = () => prompt("Ingrese la categoría: Juvenil, Bienestar o Sagas");


let filtrarLibro = filtrar();
while(filtrarLibro !== "género" && filtrarLibro !== "categoría" && filtrarLibro !== "precio") {
    alert("Error. Ingrese género, categoría o precio");
    filtrarLibro = filtrar();
}

if (filtrarLibro === "género") {
    let genero = generoFiltrado();
    while(genero !== "Romántico" && genero !== "Fantasía" && genero !== "Autoayuda"){
        alert("Error. No ha ingresado correctamente la categoría");
        genero = generoFiltrado();
    }
    const librosFiltradosPorGenero = Libros.filter(item => item.genero === genero);

    librosFiltradosPorGenero.sort((a, b) => { 
        const nombreA = a.nombre.toUpperCase();
        const nombreB = b.nombre.toUpperCase();
        if (nombreA > nombreB) {
        return 1;
        }
        if (nombreA < nombreB) {
        return -1;
        }
        return 0; 
    });

    let filtrados = "";
    librosFiltradosPorGenero.forEach((item) => {
            filtrados += `
                Id: ${item.id}
                Nombre: ${item.nombre}
                Categoría: ${item.categoría}
                Género: ${item.genero}
                autor: ${item.autor}
                Editorial: ${item.editorial}
                Envío: ${item.envio}
                Precio: $${item.precio}
            `;
    });
    console.log(filtrados);
}else if (filtrarLibro === "precio") {
    let minimo, maximo;
    do {
        minimo = parseFloat(prompt("Ingrese el precio mínimo entre 4800 y 35000"));
    } while (minimo < 4800);

    do {
        maximo = parseFloat(prompt("Ingrese el precio máximo entre 4800 y 35000"));
    } while (maximo > 35000);
    
    const librosFiltradosPorPrecio = Libros.filter(item => item.precio >= minimo && item.precio <= maximo);
    
    librosFiltradosPorPrecio.sort((a, b) => { 
        const nombreA = a.nombre.toUpperCase();
        const nombreB = b.nombre.toUpperCase();
        if (nombreA > nombreB) {
        return 1;
        }
        if (nombreA < nombreB) {
        return -1;
        }
        return 0; 
    });

    let filtrados = "";
    librosFiltradosPorPrecio.forEach(item => {
        filtrados += `
                Id: ${item.id}
                Nombre: ${item.nombre}
                Categoría: ${item.categoría}
                Género: ${item.genero}
                autor: ${item.autor}
                Editorial: ${item.editorial}
                Envío: ${item.envio}
                Precio: $${item.precio}
            `;
    });
    console.log(filtrados);

}else if (filtrarLibro === "categoría") {
    let categoria = categoriaFiltrado();
    while(categoria !== "Juvenil" && categoria !== "Bienestar" && categoria !== "Sagas") {
        alert("Error. No ha ingresado correctamente la categoría");
        categoria = categoriaFiltrado();
    }

    const librosFiltradosPorCategoria = Libros.filter((item) => item.categoría === categoria);

    librosFiltradosPorCategoria.sort((a, b) => { 
        const nombreA = a.nombre.toUpperCase();
        const nombreB = b.nombre.toUpperCase();
        if (nombreA > nombreB) {
        return 1;
        }
        if (nombreA < nombreB) {
        return -1;
        }
        return 0; 
    });
    
    let filtrados = "";
    librosFiltradosPorCategoria.forEach((item) => {
            filtrados += `
                Id: ${item.id}
                Nombre: ${item.nombre}
                Categoría: ${item.categoría}
                Género: ${item.genero}
                autor: ${item.autor}
                Editorial: ${item.editorial}
                Envío: ${item.envio}
                Precio: $${item.precio}
            `;
    });
    console.log(filtrados);
}