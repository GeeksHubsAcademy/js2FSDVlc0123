
/*

Declara 2 variables numéricas (con el valor que desees), e indica cual es mayor
de los dos. Si son iguales indicarlo también. Ves cambiando los valores para
comprobar que funciona.


*/

// let num1 = "21";
// let num2 = 666;

// if(num1 < num2){
//     console.log("numero 2 es mayor que numero 1");
// } else if(num1 === num2){
//     console.log("los numeros son iguales");
// } else {
//     console.log("numero1 es mayor que numero2");
// };

// if(num1 > num2){
//     console.log("El numero mayor es...." + num1 + " el numero menor es " + num2);

// } else if (num1 < num2 ){
//     console.log("El numero mayor es...." + num2 + " el numero menor es " + num1);

// } else {
//     console.log("Los números son iguales");
// };

// let numero1 = 100;

// if(numero1 > 50){
//     console.log("Numero1 es un número grande");
// }else {
//     console.log("Numero1 es un número pequeño");
// };


// let resultado = (numero1 > 50) ? "Numero1 es grande" : "Numero1 no es grande";
// let ternariaBooleana = (numero1 > 50) ? true : false;

// console.log(resultado);

// let contador = 0;

// //WHILE

// while(contador < 200){

//     contador++;

//     console.log(contador);
// };

//DO WHILE

// let numero = 100;

// do {

//     console.log("Hola, que tal estás?");

//     numero++;

// } while (numero < 101);

// let numero = 100;

// //FOR

// for(let i = 0; i <= numero; i++){

//     console.log(i);

// }






// let suma = 0;
// let num;

// for(let i = 0; i <10; i++){

//     num = parseInt(prompt("Introduce el número que quieres sumar"));

//     suma += num;
// }

// console.log("El total es.....", suma);




//EJERCICIOS JS 1 

/*

Propuesta de ejercicio JS:
Pida un número por prompt, acto seguido irá restando ese número hasta llegar a 0 (usando un bucle), cada uno de los números que devuelva la resta en el bucle, hay que decir por console.log si ese número es par.

*/

// let num = parseInt(prompt("Introduce el número"));

// for(let i = num; i >= 0;  i--){

//     if(i % 2 === 0){

//         console.log(i);
//     }

// }

/*

Como ampliación al ejercicio anterior, 
ahora hará una suma de todos los pares y lo mostrará 
mediante console.log una vez haya salido del bucle, 
además de ello, para sufrimiento del alumnado, 
no sólo nos dirá si un número es par, 
también nos dirá si es impar, en vez de un if else , 
usareis una ternaria.

*/
// let num = parseInt(prompt("Introduce el número"));

// let resultado = 0;

// while (num > 0){

//     if(num % 2 === 0){

//         console.log("es par", num);

//         resultado += num;
//         //resultado = resultado + num;
//     } else {

//         console.log("Es impar", num);
//     }

//     num--;

// }

// console.log(resultado);


//.....AHORA....CON UNA TERNARIA

let number = parseInt(prompt("Introduce un número:"));
let totalParNumbers = 0;

while (number > 0) {

    number%2 != 0 ? (
        console.log(number + " es un número impar")
    ) : (
        console.log(number + " es un número par"),
        totalParNumbers += number
    );
    number--;
}
console.log ("La suma total de los números páres es: " + totalParNumbers)