import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLoginsComponent } from './list-logins.component';

describe('ListLoginsComponent', () => {
  let component: ListLoginsComponent;
  let fixture: ComponentFixture<ListLoginsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLoginsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLoginsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
