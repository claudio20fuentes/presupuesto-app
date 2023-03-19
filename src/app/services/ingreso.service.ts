import { Ingreso } from "../model/ingreso.model";

export class IngresoService{

    ingresos:Ingreso[] = [
        new Ingreso("Salario",850000),
        new Ingreso("venta bicicleta",50000),
        new Ingreso("Bono navidad",200000),
    ]; 

    eliminar(ingreso:Ingreso){
        
        const indice:number = this.ingresos.indexOf(ingreso);

        this.ingresos.splice(indice,1);

    }

}