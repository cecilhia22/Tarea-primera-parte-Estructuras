/* 1 Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.

2 Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)

3 Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.

4 Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:
0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente
 Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.
5 Realiza un script que pida números hasta que se pulse “cancelar”. 
Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. 
Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
6 El verdulero de la esquina necesita una aplicación donde según la fruta 
que ingrese le diga el precio por kilo

*/
//------------------ 1 ------------------------------------//
// Entradas: num1, num2
// Procesos: ingresar los números y verificar cual es el mayor
// Salida: el mayor de los dos números

/*let num1= Number(prompt("Ingrese un número"));
let num2= Number (prompt("Ingrese otro número"));

if (isNaN(num1) || isNaN(num2)) {
    console.error("No ingresó un número");
}
else if (num1>num2){
    mayor=num1;
    console.log(`El mayor número es ${num1}`);
}
else if(num1<num2){
    mayor=num2;
    console.log(`El mayor número es ${num2}`);
}
else {
    console.error(" No hay mayor, los números son iguales");
}
*/

//----------------------- 2 ------------------------------//
/*
let numero= Number(prompt("ingrese un número"));
let divisor = Number(prompt("Ingrese el divisor"));
divisible = numero % divisor;

if (isNaN(numero) || isNaN(divisor)){
    console.error("No ingresó un número");
} 
else if (divisible === 0){
    console.log(`El número ${numero} es divisible por ${divisor}`);
}
else{
    console.log(`El número no es divisible por ${divisor}`);
}
*/

// ------------------------ 3 ---------------------------//
/*
let edad= Number(prompt("Ingrese la edad"));

if (isNaN(edad)){
    console.error("No ingresó la edad correctamente");
}
else if (edad > 18) {
    console.log("Puede sacar la licencia de conducir");
}
else {
    console.log("No puede sacar la licencia de conducir porque es menor de edad")
}
*/

// ------------------------ 4 -----------------------------//
/* Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:
0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente */
/*
let nota = Number(prompt("Ingrese la nota"));

if (isNaN(nota)){
    prompt("INgrese un número válido")
} 
else {
 while(nota <= 10){
    if (nota >=0 && nota <=2){
        alert("Muy deficiente");
        nota++;
    }
    else if ( nota>=3 && nota <= 4){
         alert("Insuficiente");
         nota++;
    }
    else if ( nota >=5 && nota <= 6){
        alert("Suficiente");
        nota++;
    }
    else if (nota === 7){
        alert("Bien");
        nota++
    }
    else if (nota >=8 && nota <=9){
        alert("Notable");
        nota++;
    }
    else{
        alert("Sobresaliente");
    }
}
}
console.error("Número erróneo, ingrese nuevamente");
*/

// -----------------------5 ------------------------//
/*Realiza un script que pida números hasta que se pulse “cancelar”. 
Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. 
Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.
*/

let numero = prompt("Ingrese un número");
let suma =0;

while(numero !== null){
    
 if (numero = typeof(Number) && numero !=isNaN){
         suma = suma + numero;
         document.write(`La suma de los números es ${suma}`);
 }
 else {
    alert("No es un número");
 }
}







// ------------------------ 6 ----------------------------------//
//El verdulero de la esquina necesita una aplicación donde según la fruta 
//que ingrese le diga el precio por kilo

/*
let fruta = prompt("Ingrese una fruta");
let preciofrutilla = 3500;
let preciopera=3800;
let preciociruela = 4000;
if (fruta != ''){

    if (fruta=== "frutilla"){
    document.write(`El precio de la frutilla es ${preciofrutilla}`);
}
    else if (fruta === "pera"){
        document.write(`El precio de la pera es ${preciopera}`);
    }
    else if( fruta === "ciruela"){
        document.write(`El precio de la ciruela es ${preciociruela}`);
    }
    else
        document.write(`Ingresar una fruta correctamente`)
    }
 else {
        document.write ("Debe ingresar una fruta")
    
    }
*/