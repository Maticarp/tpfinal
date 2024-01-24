const productos = [
    { id: 1, nombre: "Camperas", precio: 150000, img: "./img/campera.jpg" },
    { id: 1, nombre: "Camisetas", precio: 10000, img: "./img/camisetas.jpg" },
    { id: 1, nombre: "Pantalones", precio: 90000, img: "./img/pantalones.jpg" }

]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos);
        }, 2000)
    })
}

export const getUnProducto = (id) => {
    return new Promise (resolve => {
        setTimeout( () => {
            const producto = productos.find (prod =>prod.id === id);
            resolve(producto);
        },100)
    })
}
