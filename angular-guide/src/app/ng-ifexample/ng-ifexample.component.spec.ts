import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgIfexampleComponent } from './ng-ifexample.component';

describe('NgIfexampleComponent', () => {
  let component: NgIfexampleComponent;
  let fixture: ComponentFixture<NgIfexampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgIfexampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgIfexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
