import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dati-pagamento',
  templateUrl: './dati-pagamento.component.html',
  styleUrl: './dati-pagamento.component.css'
})
export class DatiPagamentoComponent {
  paymentForm!: FormGroup;

  ngOnInit (): void{
    const regexCardNum = /(?<!\d)\d{16}(?!\d)|(?<!\d[ _-])(?<!\d)\d{4}(?:[_ -]\d{4}){3}(?![_ -]?\d)/;
    const regexYear= /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;
    const regexCardCode = /^[0-9]{3,4}$/;

    this.paymentForm=new FormGroup({

      cardNumber: new FormControl('',[
        Validators.required,
        Validators.pattern(regexCardNum)
      ]),

      expiringDate: new FormControl('',[
        Validators.required,
        Validators.pattern(regexYear)
      ]),

      cvv: new FormControl('',[
        Validators.required,
        Validators.pattern(regexCardCode)
      ])

    })
  }

  checkout(){
    const paymentAccordion = document.getElementById('payment-three');
    paymentAccordion?.setAttribute('class', 'accordion-collapse collapse');
    const checkoutButton = document.getElementById('checkoutButton');
    checkoutButton?.removeAttribute('disabled')
  }

  
}
