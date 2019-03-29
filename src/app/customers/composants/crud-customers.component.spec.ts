import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudCustomersComponent } from './crud-customers.component';

describe('CrudCustomersComponent', () => {
  let component: CrudCustomersComponent;
  let fixture: ComponentFixture<CrudCustomersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudCustomersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudCustomersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
