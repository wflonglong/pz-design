import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgPzComponent } from './ng-pz.component';

describe('NgPzComponent', () => {
  let component: NgPzComponent;
  let fixture: ComponentFixture<NgPzComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgPzComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgPzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
