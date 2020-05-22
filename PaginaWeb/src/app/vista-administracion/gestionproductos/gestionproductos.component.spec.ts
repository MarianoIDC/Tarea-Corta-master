import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionproductosComponent } from './gestionproductos.component';

describe('GestionproductosComponent', () => {
  let component: GestionproductosComponent;
  let fixture: ComponentFixture<GestionproductosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionproductosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionproductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
