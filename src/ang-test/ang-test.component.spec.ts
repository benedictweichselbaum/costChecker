import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngTestComponent } from './ang-test.component';

describe('AngTestComponent', () => {
  let component: AngTestComponent;
  let fixture: ComponentFixture<AngTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
