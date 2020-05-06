import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Assignment2databindingComponent } from './assignment2databinding.component';

describe('Assignment2databindingComponent', () => {
  let component: Assignment2databindingComponent;
  let fixture: ComponentFixture<Assignment2databindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Assignment2databindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Assignment2databindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
