export class persona{
    constructor(nombre, apellido){
        this.nombre=nombre
        this.apellido=apellido
    }
    fullname(){
        return `${this.nombre} ${this.apellido}`
    }
}