import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisputeresolutionComponent } from './disputeresolution.component';

describe('DisputeresolutionComponent', () => {
  let component: DisputeresolutionComponent;
  let fixture: ComponentFixture<DisputeresolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisputeresolutionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisputeresolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
