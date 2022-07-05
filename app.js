// solicitar el nombre al cliente
let ingresarNombre = prompt("ingresa su nombre o ESC para interrumpir");
let texto = " ";
while (ingresarNombre != "ESC" && ingresarNombre != "esc") {
  texto += ingresarNombre + " ";
  ingresarNombre = prompt("ingrese su nombre o ESC para interrumpir");
}
alert("Hola Bienvenido a nuestra tiendagit" + texto);
// solicitar al cliente agregar producto/s para calcular monto total de la compra
let precioCuchillo = parseFloat(prompt("ingrese precio del primer cuchillo"));

let precioCuchillo2 = parseFloat(prompt("ingrese precio del segundo cuchillo"));

function sumarProducto(precioCuchillo, precioCuchillo2) {
  let precioTotal = precioCuchillo + precioCuchillo2;
  return precioTotal;
}
console.log(sumarProducto(precioCuchillo, precioCuchillo2));

//costo total
precioTotal = (sumarProducto(precioCuchillo, precioCuchillo2));
let envio = 500;
function costoTotal(precioTotal, envio) {
  let totalCompra = precioTotal + envio;
  return totalCompra;
}
console.log(costoTotal(precioTotal, envio));
totalCompra = (costoTotal(precioTotal, envio));
alert("el total de la compra con el envio es de: " +totalCompra);
