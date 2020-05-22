import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionsucursalesComponent } from './gestionsucursales.component';

describe('GestionsucursalesComponent', () => {
  let component: GestionsucursalesComponent;
  let fixture: ComponentFixture<GestionsucursalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionsucursalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionsucursalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
