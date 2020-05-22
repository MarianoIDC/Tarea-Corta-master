import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BarraBodegueroComponent } from './barra-bodeguero.component';

describe('BarraBodegueroComponent', () => {
  let component: BarraBodegueroComponent;
  let fixture: ComponentFixture<BarraBodegueroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BarraBodegueroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BarraBodegueroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
