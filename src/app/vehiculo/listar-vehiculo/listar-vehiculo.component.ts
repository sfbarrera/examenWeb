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

  constructor(private vehiculoService: VehiculoService) {}

  ngOnInit(): void {
    this.vehiculoService.getVehiculos().subscribe(data => {
      this.vehiculos = data;
    });
  }

}
