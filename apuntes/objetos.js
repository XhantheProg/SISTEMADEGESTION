const tienda={
    productos:[
        {id:1, nombre:'Mouse'},
        {id:2, nombre:'Teclado'}
    ]
}
//metodo1
tienda.productos.forEach(producto=>console.log(producto.nombre))
//metodo 2

let llaveproducto= "productos"
let llaveid= "id"
tienda[llaveproducto].forEach(product=>console.log(product[llaveid]))