import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaquetesentregadosComponent } from './paquetesentregados.component';

describe('PaquetesentregadosComponent', () => {
  let component: PaquetesentregadosComponent;
  let fixture: ComponentFixture<PaquetesentregadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaquetesentregadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaquetesentregadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
