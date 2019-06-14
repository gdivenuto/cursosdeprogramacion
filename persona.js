class Persona {
    constructor (nombre, apellido, dni, email) {
        this._nombre   = nombre;
        this._apellido = apellido;
        this._dni      = dni;
        this._email    = email;
    }

    // Cada método get devuelve el valor almacenado en los atributos 
    // "_legajo", "_dni" y "_email" respectivamente
    get nombre() {
        return this._nombre;
    }
    get apellido() {
        return this._apellido;
    }
    get dni() {
        return this._dni;
    }
    get email() {
        return this._email;
    }

    // Cada método set actualiza el valor almacenado en los atributos 
    // "_legajo", "_dni" y "_email" respectivamente
    // con los valores pasados como parámetro
    set nombre(pnombre) {
        this._nombre = pnombre;
    }
    set apellido(papellido) {
        this._apellido = papellido;
    }
    set dni(pdni) {
        this._dni = pdni;
    }
    set email(pemail) {
        this._email = pemail;
    }

    // Se muestra en pantalla la información de la Persona
    mostrarInfo() {
        document.write(`Nombre: ${this.nombre}<br>`);
        document.write(`Apellido: ${this.apellido}<br>`);
        document.write(`DNI: ${this.dni}<br>`);
        document.write(`Email: ${this.email}<br>`);
    }
}