export default class Nombre{
    constructor(nombre, apellidoPaterno, apellidoMaterno){
        this.nombre = nombre;
        this.apellidoP = apellidoPaterno;
        this.apellidoM = apellidoMaterno; 
    }
    getNombreCompleto(){
        console.log(`${this.nombre} ${this.apellidoP} ${this.apellidoM}`);
    }
    getApellidoNombre(){
        console.log(`${this.apellidoP} ${this.apellidoM} ${this.nombre}`);
    }
    getIniciales(){
        console.log()
    }
}
let paciente1 = new Nombre("Juan", "Solorio", "Mendoza");
console.log(paciente1.getNombreCompleto());
console.log(paciente1.getApellidoNombre());
console.log(paciente1.getIniciales());