class Calculador {
    // Al crearse un Calculador se le asignan los operadores a procesar
    constructor(nro1, nro2) {
        this.num1 = nro1;
        this.num2 = nro2;
    }

    sumar() {
        return (parseInt(this.num1) + parseInt(this.num2));
    }

    restar() {
        return (parseInt(this.num1) - parseInt(this.num2));
    }
    
    multiplicar() {
        return (parseInt(this.num1) * parseInt(this.num2));
    }

    dividir() {
        if (parseInt(this.num2) !== 0)
            return (parseInt(this.num1) / parseInt(this.num2));
        else
            return "No se puede dividir por cero !!";
    }
}