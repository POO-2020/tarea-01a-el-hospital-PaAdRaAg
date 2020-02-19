export default class Fecha {
    /**
     * 
     * @param {number} dia 
     * @param {number} mes 
     * @param {number} año 
     */
    constructor(dia, mes, año){
        this.fecha = new Date(año, mes - 1, dia);
        this.diaSemana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
        this.diaMes = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
        this.fecha2 = new Date(año, mes - 1, dia);
    }

    getAños(){
        let años = (this.fecha.getFullYear() - this.fecha2.getFullYear());
        return años;

    }
    getMeses(){
        let month = this.fecha.getMonth() + 1;
        return month;

    }
    getSemanas(){

    }
    getDias(){

    }
    getFecha(){

    }
    getDiaFecha(){

    }
}

let fecha = new Fecha(5, 6, 2000);
console.log(fecha.getAños());