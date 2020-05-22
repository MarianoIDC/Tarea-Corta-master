import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionrastreopaquetesComponent } from './gestionrastreopaquetes.component';

describe('GestionrastreopaquetesComponent', () => {
  let component: GestionrastreopaquetesComponent;
  let fixture: ComponentFixture<GestionrastreopaquetesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionrastreopaquetesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionrastreopaquetesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
