import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionrutasComponent } from './gestionrutas.component';

describe('GestionrutasComponent', () => {
  let component: GestionrutasComponent;
  let fixture: ComponentFixture<GestionrutasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionrutasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionrutasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
