import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraAdministracionComponent } from './barra-administracion.component';

describe('BarraAdministracionComponent', () => {
  let component: BarraAdministracionComponent;
  let fixture: ComponentFixture<BarraAdministracionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarraAdministracionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraAdministracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
