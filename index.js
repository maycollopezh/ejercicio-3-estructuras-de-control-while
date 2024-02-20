// Ejercicio 1
let numeroUsuario1 = parseInt(prompt("Ingrese un número:"));
let i = 1;
console.log("Ejercicio 1:");
while (i <= numeroUsuario1) {
    if (i % 5 === 0) {
        console.log(i);
    }
    i++;
}

// Ejercicio 2
let numeroUsuario2a = parseInt(prompt("Ingrese el primer número (entre 1 y 50):"));
let numeroUsuario2b = parseInt(prompt("Ingrese el segundo número (entre 1 y 50):"));
console.log("Ejercicio 2:");
for (let j = 1; j <= 50; j++) {
    if (j === numeroUsuario2a || j === numeroUsuario2b) {
        console.log(`¡Lotería! ${j}`);
    } else {
        console.log(j);
    }
}

// Ejercicio 3
let numerosCapturados = [];
let numeroUsuario3 = parseInt(prompt("Ingrese un número (0 para terminar):"));
while (numeroUsuario3 !== 0) {
    numerosCapturados.push(numeroUsuario3);
    numeroUsuario3 = parseInt(prompt("Ingrese otro número (0 para terminar):"));
}
console.log("Ejercicio 3:", numerosCapturados);

// Ejercicio 4
let palabrasCapturadas = "";
let palabraUsuario = prompt("Ingrese una palabra (deje en blanco para terminar):");
while (palabraUsuario !== "") {
    palabrasCapturadas += palabraUsuario + " ";
    palabraUsuario = prompt("Ingrese otra palabra (deje en blanco para terminar):");
}
console.log("Ejercicio 4:", palabrasCapturadas.trim());

// Ejercicio 5
console.log("Ejercicio 5:");
while (true) {
    let diaSemana = prompt("Ingrese un día de la semana (o 'domingo' para terminar):");
    if (diaSemana.toLowerCase() === "domingo") {
        alert("Ve a descansar");
        break;
    }
    switch (diaSemana.toLowerCase()) {
        case "lunes":
            alert("Es lunes, ¡ánimo!");
            break;
        case "martes":
            alert("Es martes, ¡sigue adelante!");
            break;
        case "miércoles":
            alert("Es miércoles, ¡estás a mitad de semana!");
            break;
        case "jueves":
            alert("Es jueves, ¡casi llegas al viernes!");
            break;
        case "viernes":
            alert("¡Viernes al fin!");
            break;
        case "sábado":
            alert("Es sábado, ¡disfruta!");
            break;
        default:
            alert("Día no reconocido, inténtalo de nuevo.");
    }
}