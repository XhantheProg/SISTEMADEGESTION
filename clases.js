class usuario{
    constructor(nombre, apellido, descripcion, correo, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.descripcion = descripcion;
        this.correo = correo;
        this.edad = edad;
    }
}

let usuario1 = new usuario('juan', 'perez', 'descripcion1', 'juan@example.com', 30);
console.log(usuario1);

let usuario2 = new usuario('maria', 'lopez', 'descripcion2', 'maria@example.com', 25);
console.log(usuario2);