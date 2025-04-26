import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Vehiculo } from '../vehiculo.model';
import { VehiculoService } from '../vehiculo.service';

@Component({
  selector: 'app-listar-vehiculo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listar-vehiculo.component.html',
  styleUrl: './listar-vehiculo.component.css'
})
export class ListarVehiculoComponent implements OnInit{
  vehiculos: Vehiculo[] = [];

  marcasTotales: { nombre: string; total: number }[] = [];

  constructor(private vehiculoService: VehiculoService) {}

  ngOnInit(): void {
    this.vehiculoService.getVehiculos().subscribe(data => {
      this.vehiculos = data;

      /* Calculo de totales */
      this.calcularTotales();
    });
  }

  calcularTotales(): void {
    const contador: { [marca: string]: number } = {};
    for (let v of this.vehiculos) {
      contador[v.marca] = (contador[v.marca] || 0) + 1;
    }
    this.marcasTotales = Object.keys(contador).map(marca => ({
      nombre: marca,
      total: contador[marca]
    }));
  }

}
