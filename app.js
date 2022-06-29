let ingresaNumero = parseInt(prompt("Ingresa un numero para sumar"));
for (let i = 0; i <= 10; i++) {
let resultado = ingresaNumero + i;
   alert(ingresaNumero + " + " + i + " = " + resultado);
}

let ingresarNombre = prompt("ingresa su nombre o ESC para interrumpir");
let texto = " ";
while (ingresarNombe != "ESC" && ingresarNombre != "esc") {
    texto += ingresarNombre + " ";
    ingresarNombre = prompt("ingrese su nombre o ESC para interrumpir");
    alert(texto)
 }
