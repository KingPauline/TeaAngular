import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccrodeonComponent } from './accrodeon.component';

describe('AccrodeonComponent', () => {
  let component: AccrodeonComponent;
  let fixture: ComponentFixture<AccrodeonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccrodeonComponent]
    });
    fixture = TestBed.createComponent(AccrodeonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
