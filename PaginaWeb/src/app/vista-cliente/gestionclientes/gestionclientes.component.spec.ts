import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionclientesComponent } from './gestionclientes.component';

describe('GestionclientesComponent', () => {
  let component: GestionclientesComponent;
  let fixture: ComponentFixture<GestionclientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionclientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionclientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
