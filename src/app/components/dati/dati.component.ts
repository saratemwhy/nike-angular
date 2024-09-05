import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ShoesServiceService } from '../../services/shoes-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { countries } from 'countries-list';


@Component({
  selector: 'app-dati',
  templateUrl: './dati.component.html',
  styleUrl: './dati.component.css'
})
export class DatiComponent {

  constructor(private shoesService: ShoesServiceService, private route: ActivatedRoute, private router: Router){}
  
  
  dataForm!: FormGroup;
  countryList = Object.values(countries);
  
  ngOnInit(): void {

    this.dataForm = new FormGroup ({

      inputName: new FormControl ('', [
        Validators.required,
        Validators.pattern("^[a-zA-Z]+$")
      ]),
      
      inputSurname: new FormControl('', [
        Validators.required,
        Validators.pattern("^[a-zA-Z]+([ \-']{0,1}[a-zA-Z]+){0,2}$")
      ]),

      inputMail: new FormControl('', [
        Validators.required,
        Validators.email
      ]),

      inputCity: new FormControl('', [
        Validators.required
      ]),

      inputState: new FormControl('', [
        Validators.required
      ]),

      inputCode: new FormControl('', [
        Validators.required,
        Validators.pattern("^[0-9]{5}$")
      ]),

      inputAddress: new FormControl('', [
        Validators.required
      ]),

      checkConditions: new FormControl ('', [
        Validators.required
      ])
    })
    
  }

  showPayment(){
    const paymentAccordion = document.getElementById('payment-three');
    const dataAccordion = document.getElementById('data-two');
    dataAccordion?.setAttribute('class', 'accordion-collapse collapse');
    paymentAccordion?.setAttribute('class', 'accordion-collapse collapse show');
  }
}
