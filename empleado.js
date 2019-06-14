// Se define la clase Empleado que hereda atributos y responsabilidades de la clase Persona
class Empleado extends Persona {
    // Se inicializa automáticamente al crear una instancia de un Empleado
    constructor(nombre, apellido, dni, email, legajo, sueldo) {
        // Se ejecuta primero el constructor de la clase padre de la cual hereda
        super(nombre, apellido, dni, email);
        // Se inicializan los atributos propios del Empleado
        this._legajo = legajo;
        if (sueldo > 0)
            this._sueldo = sueldo;
        else
            this._sueldo = 0;
    }
    // Devuelve el valor almacenado en el atributo "_legajo"
    get legajo() {
        return this._legajo;
    }
    // Actualiza el valor almacenado en el atributo "_legajo"
    set legajo(plegajo) {
        if (plegajo%1 === 0)
            this._legajo = plegajo;
        else
            throw "Error en asignación del legajo del empleado.";
            // este mensaje se muestra en la consola del navegador de la siguiente manera:
            // uncaught exception: Error en asignación del legajo del empleado.
    }

    // Devuelve el valor almacenado en el atributo "_sueldo"
    get sueldo() {
        return this._sueldo;
    }
    // Actualiza el valor almacenado en el atributo "_sueldo"
    set sueldo(psueldo) {
        // Si el monto es válido, se actualiza el sueldo
        if (psueldo > 0)
            this._sueldo = psueldo;
        else // sino, se informa el error
            throw "El monto del sueldo del empleado NO es válido.";
            // este mensaje se muestra en la consola del navegador de la siguiente manera:
            // uncaught exception: El monto del sueldo del empleado NO es válido. 
    }

    // Se muestra en pantalla la información del Empleado
    mostrarInfo() {
        // Primero se ejecuta el método de la clase padre
        super.mostrarInfo();
        // luego se muestran los valores de los atributos propios de la clase Empleado
        document.write(`Legajo: ${this.legajo}<br>`);
        document.write(`Sueldo: $ ${this.sueldo}<br><hr>`);
    }
}