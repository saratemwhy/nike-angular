import { Component, OnInit } from '@angular/core';
import { ShoesServiceService } from '../../services/shoes-service.service';
import { IShoes } from '../../models/nike.model';

@Component({
  selector: 'app-best-seller',
  templateUrl: './best-seller.component.html',
  styleUrl: './best-seller.component.css'
})
export class BestSellerComponent implements OnInit{
  constructor(private shoesService: ShoesServiceService){}

 shoes : IShoes [] = [];

 ngOnInit (): void{
    this.shoesService.getShoes().subscribe((r: IShoes[]) => {
      this.shoes=r.filter(s => s.best_seller >= 4);
      console.log(this.shoes)
    })
  }
}
