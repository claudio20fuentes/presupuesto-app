import { Component, OnInit } from '@angular/core';
import { Ingreso } from '../model/ingreso.model';
import { IngresoService } from '../services/ingreso.service';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {

  ingresos:Ingreso[]=[];

  constructor(private ingresoService: IngresoService) { }

  ngOnInit(): void {

    this.ingresos = this.ingresoService.ingresos;

  }

  eliminarRegistros(ingreso:Ingreso){
    this.ingresoService.eliminar(ingreso);
  }

}
