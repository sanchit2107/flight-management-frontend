import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminWindowComponent } from './admin-window.component';

describe('AdminWindowComponent', () => {
  let component: AdminWindowComponent;
  let fixture: ComponentFixture<AdminWindowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminWindowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminWindowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
