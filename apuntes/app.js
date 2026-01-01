import { createprduct, getproduct, updateproduct,deleteproduct } from './products.js'

console.log("crear");
createprduct("laptop", 3000);

console.log("obtener");
console.log(getproduct());

console.log("update");
console.log(updateproduct("celular", 4000));

console.log("eliminar");
console.log(deleteproduct());


