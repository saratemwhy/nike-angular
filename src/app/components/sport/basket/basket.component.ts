import { Component } from '@angular/core';
import { ShoesServiceService } from '../../../services/shoes-service.service';
import { IShoes } from '../../../models/nike.model';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrl: './basket.component.css'
})
export class BasketComponent {
  constructor(private shoesService: ShoesServiceService){}

  shoes : IShoes [] = [];

  ngOnInit (): void{
      this.shoesService.getShoes().subscribe((r: IShoes[]) => {
        this.shoes=r.filter(s => s.categoria.toLowerCase().includes("basket"));
        console.log(this.shoes)
      })
  }
}
