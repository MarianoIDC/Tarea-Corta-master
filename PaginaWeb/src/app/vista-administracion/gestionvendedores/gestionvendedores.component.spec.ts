import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionvendedoresComponent } from './gestionvendedores.component';

describe('GestionvendedoresComponent', () => {
  let component: GestionvendedoresComponent;
  let fixture: ComponentFixture<GestionvendedoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionvendedoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionvendedoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
