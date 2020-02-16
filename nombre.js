export default class Nombre{
    /**
     * 
     * @param {string} nombre 
     * @param {string} apellidoPaterno 
     * @param {string} apellidoMaterno 
     */
    constructor(nombre, apellidoPaterno, apellidoMaterno){
        this.nombre = nombre;
        this.apellidoP = apellidoPaterno;
        this.apellidoM = apellidoMaterno; 
    }
    getNombreCompleto(){
        return(`${this.nombre} ${this.apellidoP} ${this.apellidoM}`);
    }
    getApellidoNombre(){
        return(`${this.apellidoP} ${this.apellidoM} ${this.nombre}`);
    }
    getIniciales(){
        return(``);
    }
}
let paciente1 = new Nombre("Juan", "Solorio", "Mendoza");
console.log(paciente1.getNombreCompleto());
console.log(paciente1.getApellidoNombre());
console.log(paciente1.getIniciales());