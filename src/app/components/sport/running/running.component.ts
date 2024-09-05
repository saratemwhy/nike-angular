import { Component } from '@angular/core';
import { ShoesServiceService } from '../../../services/shoes-service.service';
import { IShoes } from '../../../models/nike.model';


@Component({
  selector: 'app-running',
  templateUrl: './running.component.html',
  styleUrl: './running.component.css'
})
export class RunningComponent {
  constructor(private shoesService: ShoesServiceService){}

  shoes : IShoes [] = [];


 

  ngOnInit (): void{
      this.shoesService.getShoes().subscribe((r: IShoes[]) => {
        this.shoes=r.filter(s => s.categoria.toLowerCase().includes("running"));
        console.log(this.shoes)
      })
      

  }
}




