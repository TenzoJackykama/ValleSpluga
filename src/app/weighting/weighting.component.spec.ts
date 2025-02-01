import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightingComponent } from './weighting.component';

describe('WeightingComponent', () => {
  let component: WeightingComponent;
  let fixture: ComponentFixture<WeightingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WeightingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WeightingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
