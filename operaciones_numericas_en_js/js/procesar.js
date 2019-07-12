// Se calcula la operación respectiva
function calcular(operacion) {
    // Se toman los elementos que contienen los números y el que muestra el resultado
    var num1      = document.getElementById("num1");
    var num2      = document.getElementById("num2");
    var respuesta = document.getElementById("resultado");
    
    // Se comprueba si se ha introducido el primer número
    if (isNaN(parseFloat(num1.value))) {
        alert("Ingrese el primer valor");
        num1.focus();
    } else if (isNaN(parseFloat(num2.value))) { // y el segundo número
        alert("Ingrese el segundo valor");
        num2.focus();
    } else {
        // Se crea un Calculador
        calculador = new Calculador(num1.value, num2.value);

        // Se calcula:
        switch(operacion) {
            case 'sumar':
                var resultado = calculador.sumar();
                break;
            case 'restar':
                var resultado = calculador.restar();
                break;
            case 'multiplicar':
                var resultado = calculador.multiplicar();
                break;
            case 'dividir':
                var resultado = calculador.dividir();
                break;
        }
        // Se muestra el resultado
        respuesta.innerText = resultado;
    }
}