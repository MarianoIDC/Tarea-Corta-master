import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraReportesComponent } from './barra-reportes.component';

describe('BarraReportesComponent', () => {
  let component: BarraReportesComponent;
  let fixture: ComponentFixture<BarraReportesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarraReportesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraReportesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
