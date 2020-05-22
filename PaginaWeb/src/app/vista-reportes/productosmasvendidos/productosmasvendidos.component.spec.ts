import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosmasvendidosComponent } from './productosmasvendidos.component';

describe('ProductosmasvendidosComponent', () => {
  let component: ProductosmasvendidosComponent;
  let fixture: ComponentFixture<ProductosmasvendidosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductosmasvendidosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosmasvendidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
