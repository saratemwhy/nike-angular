import { Component } from '@angular/core';
import { ShoesServiceService } from '../../../services/shoes-service.service';
import { IShoes } from '../../../models/nike.model';

@Component({
  selector: 'app-calcio',
  templateUrl: './calcio.component.html',
  styleUrl: './calcio.component.css'
})
export class CalcioComponent {
  constructor(private shoesService: ShoesServiceService){}

  shoes : IShoes [] = [];

  ngOnInit (): void{
      this.shoesService.getShoes().subscribe((r: IShoes[]) => {
        this.shoes=r.filter(s => s.categoria === "calcio");
      })
  }
}
