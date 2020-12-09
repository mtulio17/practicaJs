let n1 = parseInt (prompt("escriba un numero"));
let n2 = parseInt (prompt("escriba un segundo numero"));
let n3 = parseInt (prompt("escriba un tercer numero"));

if (n1>n2 && n1>n3) {
    document.write("El mayor es: " + n1)
} else if (n2>n1 && n2>n3) {
    document.write("El mayor es: " + n2)    
} else if (n3>n1 && n3>n2) {
    document.write("El mayor es: " + n3)
} else {
    document.write("Ninguno es mayor")
}