import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RastreopaqueteComponent } from './rastreopaquete.component';

describe('RastreopaqueteComponent', () => {
  let component: RastreopaqueteComponent;
  let fixture: ComponentFixture<RastreopaqueteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RastreopaqueteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RastreopaqueteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
