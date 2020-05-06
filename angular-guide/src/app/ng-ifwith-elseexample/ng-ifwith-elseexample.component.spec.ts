import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIfwithElseexampleComponent } from './ng-ifwith-elseexample.component';

describe('NgIfwithElseexampleComponent', () => {
  let component: NgIfwithElseexampleComponent;
  let fixture: ComponentFixture<NgIfwithElseexampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgIfwithElseexampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgIfwithElseexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
