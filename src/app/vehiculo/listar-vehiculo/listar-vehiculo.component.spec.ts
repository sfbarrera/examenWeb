import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListarVehiculoComponent } from './listar-vehiculo.component';

import { Vehiculo } from '../vehiculo.model';
import { VehiculoService } from '../vehiculo.service';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ListarVehiculoComponent', () => {
  let component: ListarVehiculoComponent;
  let fixture: ComponentFixture<ListarVehiculoComponent>;

  /* Variables para pruebas */
  let testVehiculos: Vehiculo[];

  beforeEach(async () => {

    /*Solicitaron 3 vehiculos de pruebas*/
    testVehiculos = [
      new Vehiculo(1, 'Renault', 'Kangoo', 'VU Express', 2017, 93272, 'Blanco', 'https://cdn.group.renault.com/ren/co/vehicles/kangoo/home/renault-kangoo-exterior.jpg'),
      new Vehiculo(2, 'Chevrolet', 'Spark', 'Life', 2018, 55926, 'Plata', 'https://turistran.com/2-thickbox_default/chevrolet-spark-life.jpg'),
      new Vehiculo(3, 'Chevrolet', 'Sail', 'LTZ HB', 2016, 94321, 'Rojo', 'https://www.chevrolet.com.ec/content/dam/chevrolet/south-america/ecuador/espanol/index/cars/2019-sail/mov/01-images/2018-chevrolet-sail-rojo-01.png')
    ];
    const vehiculosServiceMock = {
      getVehiculos: () => of(testVehiculos)
    };

    /*Genero el testbed*/
    await TestBed.configureTestingModule({
      imports: [ListarVehiculoComponent, HttpClientTestingModule],
      providers: [{ provide: VehiculoService, useValue: vehiculosServiceMock }]
    }).compileComponents();

    /*Creo el componente*/
    fixture = TestBed.createComponent(ListarVehiculoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

    /*Pruebas*/
  it('Se deberia crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('Deberia tener 3 filas en la tabla - una por cada vehiculo + encabezados', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const tableRows = compiled.querySelectorAll('tbody tr');
    const tableHeaders = compiled.querySelectorAll('thead tr th');

    expect(tableHeaders.length).toBeGreaterThan(0);
    expect(tableRows.length).toBe(3);
  });

  it('Deberia validar conteo de los datos de pruebas para Renault', () => {
    component.calcularTotales();
    expect(component.marcasTotales[0].nombre).toBe("Renault");
    expect(component.marcasTotales[0].total).toBe(1);
  });

  it('Deberia validar conteo de los datos de pruebas para Chevrolet', () => {
    component.calcularTotales();
    expect(component.marcasTotales[1].nombre).toBe("Chevrolet");
    expect(component.marcasTotales[1].total).toBe(2);
  });





});
