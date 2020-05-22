import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadorepartoComponent } from './listadoreparto.component';

describe('ListadorepartoComponent', () => {
  let component: ListadorepartoComponent;
  let fixture: ComponentFixture<ListadorepartoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadorepartoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadorepartoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
