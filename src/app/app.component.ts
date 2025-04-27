import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListarVehiculoComponent } from './vehiculo/listar-vehiculo/listar-vehiculo.component';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ListarVehiculoComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'vehiculos-app';
}
