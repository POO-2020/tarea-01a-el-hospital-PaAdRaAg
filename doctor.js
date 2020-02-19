export default class Doctor{
    /**
     * 
     * @param {string} nombre 
     * @param {string} especialidad 
     * @param {number} telefono 
     * @param {number} cedula 
     */
    constructor(nombre, especialidad, telefono, cedula){
        this.nombre = nombre;
        this. especialidad = especialidad;
        this.telefono = telefono;
        this.cedula = cedula;
    }
    getPerfil() {
        return(`${this.nombre}, ${this.especialidad}, ${this.telefono}, ${this.cedula}`);
    }
}

let doctor1 = new Doctor("Pedro Ramírez", "Dermatología", 3123154898, 56258456);
let doctor2 = new Doctor("Ernesto Pérez", "Oftalmología", 3135649512, 98653212);
let doctor3 = new Doctor("José Dominguez", "Urología", 3123566868, 63124556);
console.log(doctor1.getPerfil());
console.log(doctor2.getPerfil());
console.log(doctor3.getPerfil());