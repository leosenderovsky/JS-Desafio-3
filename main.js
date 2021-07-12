let ingresarNumero = parseInt(prompt("Ingrese un número para ver cómo se divide hasta 30"));

for (let i = 1; i <= 30; i++) {
    let resultado = ingresarNumero / i ;
    alert(ingresarNumero +" ÷ "+ i +" = "+ resultado);
}



let ingresarColor = prompt("Ingrese un color de la bandera argentina o presione SALIR para salir de la consola");

while (ingresarColor != "SALIR")
while (ingresarColor != "salir") {
    switch (ingresarColor) {
        case "celeste":
        case "CELESTE":
        case "Celeste":
            alert("Celeste es un color de la bandera argentina");
            break;
        case "blanco":
        case "BLANCO":
        case "Blanco":
            alert("Blanco es un color de la bandera argentina");
            break;
        case "amarillo":
        case "AMARILLO":
        case "Amarillo":
            alert("Amarillo es el color del solcito que está en la bandera argentina");
            break;
        default:
            alert(ingresarColor + " no es un color de la bandera argentina");
            break;
    }
    ingresarColor = prompt("Ingrese un color de la bandera argentina o presione SALIR para salir de la consola");
}