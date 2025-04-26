import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListarVehiculoComponent } from './vehiculo/listar-vehiculo/listar-vehiculo.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListarVehiculoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'vehiculos-app';
}
