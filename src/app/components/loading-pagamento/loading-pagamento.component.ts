import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loading-pagamento',
  templateUrl: './loading-pagamento.component.html',
  styleUrl: './loading-pagamento.component.css'
})
export class LoadingPagamentoComponent {

  constructor(private router: Router){}


  ngOnInit(): void {
    setTimeout(() => {
      this.router.navigate(['/thank-you']);
    }, 5000);
  }
}
