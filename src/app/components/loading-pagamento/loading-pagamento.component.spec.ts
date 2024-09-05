import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingPagamentoComponent } from './loading-pagamento.component';

describe('LoadingPagamentoComponent', () => {
  let component: LoadingPagamentoComponent;
  let fixture: ComponentFixture<LoadingPagamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoadingPagamentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoadingPagamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
