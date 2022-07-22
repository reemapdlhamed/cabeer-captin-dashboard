import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CaptinComponent } from './captin.component';

describe('CaptinComponent', () => {
  let component: CaptinComponent;
  let fixture: ComponentFixture<CaptinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CaptinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CaptinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
