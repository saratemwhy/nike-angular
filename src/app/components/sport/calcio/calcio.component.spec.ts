import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcioComponent } from './calcio.component';

describe('CalcioComponent', () => {
  let component: CalcioComponent;
  let fixture: ComponentFixture<CalcioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalcioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalcioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
