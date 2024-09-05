import { Component, OnInit } from '@angular/core';
import { ShoesServiceService } from '../../services/shoes-service.service';
import { INike, IShoes } from '../../models/nike.model';
import { map } from 'rxjs';

@Component({
  selector: 'app-nuovi-arrivi',
  templateUrl: './nuovi-arrivi.component.html',
  styleUrl: './nuovi-arrivi.component.css'
})
export class NuoviArriviComponent implements OnInit {
 constructor(private shoesService: ShoesServiceService){}

 shoes : IShoes [] = [];

 ngOnInit (): void{
    this.shoesService.getShoes().subscribe((r: IShoes[]) => {
      this.shoes=r.filter(s => s.nuovo_arrivo == true);
      console.log(this.shoes)
    })
  }
}
