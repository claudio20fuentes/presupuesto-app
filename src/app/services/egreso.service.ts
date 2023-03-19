import { Egreso } from "../model/egreso.model";

export class EgresoService{

    egresos:Egreso[]=[
        new Egreso("Dividendo", 120000),
        new Egreso("luz", 20000),
        new Egreso("agua",15000)
    ];

    eliminar(egreso:Egreso){
        const indice:number = this.egresos.indexOf(egreso);
        this.egresos.splice(indice,1);
    }


}