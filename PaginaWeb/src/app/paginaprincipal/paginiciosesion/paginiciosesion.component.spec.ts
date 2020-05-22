import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginiciosesionComponent } from './paginiciosesion.component';

describe('PaginiciosesionComponent', () => {
  let component: PaginiciosesionComponent;
  let fixture: ComponentFixture<PaginiciosesionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginiciosesionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginiciosesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
