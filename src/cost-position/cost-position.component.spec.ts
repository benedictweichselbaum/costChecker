import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostPositionComponent } from './cost-position.component';

describe('CostPositionComponent', () => {
  let component: CostPositionComponent;
  let fixture: ComponentFixture<CostPositionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostPositionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostPositionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
