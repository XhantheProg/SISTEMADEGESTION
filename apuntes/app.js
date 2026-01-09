import { createprduct, getproduct, updateproduct,deleteproduct } from './products.js'

console.log("crear");
createprduct("laptop", 3000);

console.log("obtener");
console.log(getproduct());

console.log("update");
console.log(updateproduct("celular", 4000));

console.log("eliminar");
console.log(deleteproduct());

import {persona} form './';
const p1=new persona('maria', 'ramirez')
const p2=new persona('maria', 'ramirez')
console.log(p1);
console.log(p2);

console.log("Fullname: ", p1.fullname());
console.log("Fullname: ", p2.fullname());


