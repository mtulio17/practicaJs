let num1 = parseInt(prompt("Escribe un primer numero"));
let num2 = parseInt(prompt("Escribe un segundo numero"));

if(num1 - num2 > 0){
    document.write("el mayor es: " + num1);
} else if (num1 - num2 == 0) {
    document.write("ninguno es mayor");
} else {
    document.write("el mayor es: " + num2)
}