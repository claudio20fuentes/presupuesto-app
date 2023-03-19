import { Component, Input, OnInit } from '@angular/core';
import { Egreso } from '../model/egreso.model';
import { EgresoService } from '../services/egreso.service';

@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html',
  styleUrls: ['./egreso.component.css']
})
export class EgresoComponent implements OnInit {

  egresos:Egreso[]=[];
  @Input() ingresoTotal;

  constructor(private egresosService: EgresoService) { }

  ngOnInit(): void {

    this.egresos = this.egresosService.egresos;

  }

  eliminarEgreso(egreso:Egreso){
    this.egresosService.eliminar(egreso);
  }
  
  calcularPorcentaje(egreso:Egreso){
    return egreso.valor/this.ingresoTotal;
  }

}
