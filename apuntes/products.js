let product = null;

export function createprduct(name, price){
    product={
        id:1,
        name:name,
        price:price

    }

    console.log(product);
    
}


export function getproduct(){ return product}; 
export function updateproduct(name,price){
    if(!product){
        return "No existe el producto";
    } 
    product.name = name;
    product.price=price;
    return product;
}

export function deleteproduct(){
    product=null;
    return `${product} eliminado`
}
