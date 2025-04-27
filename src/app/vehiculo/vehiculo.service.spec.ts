import { TestBed } from '@angular/core/testing';

import { VehiculoService } from './vehiculo.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';


describe('VehiculoService', () => {
  let service: VehiculoService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],  
      providers: [VehiculoService]
    });
    service = TestBed.inject(VehiculoService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('Se deberia crear el servicio', () => {
    expect(service).toBeTruthy();
  });
});
