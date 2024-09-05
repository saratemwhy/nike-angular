import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatiPagamentoComponent } from './dati-pagamento.component';

describe('DatiPagamentoComponent', () => {
  let component: DatiPagamentoComponent;
  let fixture: ComponentFixture<DatiPagamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DatiPagamentoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatiPagamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
