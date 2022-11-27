function agregar(lista){
    let elemento=prompt("que elemento quieres?");
    lista.push(elemento);
}
let nuevo=true;
const carrito=[]
while(confirm("Deseas comprar?")){
    agregar(carrito)
}
alert("Tu carrito es: " + carrito);
console.log("Tu carrito es")
for (const elemento of carrito) {
    console.log(elemento)
}





