import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionpaquetesComponent } from './gestionpaquetes.component';

describe('GestionpaquetesComponent', () => {
  let component: GestionpaquetesComponent;
  let fixture: ComponentFixture<GestionpaquetesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionpaquetesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionpaquetesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
