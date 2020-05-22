import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaAdministracionComponent } from './vista-administracion.component';

describe('VistaAdministracionComponent', () => {
  let component: VistaAdministracionComponent;
  let fixture: ComponentFixture<VistaAdministracionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaAdministracionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaAdministracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
