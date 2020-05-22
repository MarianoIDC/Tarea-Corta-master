import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestiontrabajadoresComponent } from './gestiontrabajadores.component';

describe('GestiontrabajadoresComponent', () => {
  let component: GestiontrabajadoresComponent;
  let fixture: ComponentFixture<GestiontrabajadoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestiontrabajadoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestiontrabajadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
