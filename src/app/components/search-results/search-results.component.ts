import { Component, input, Input, OnInit } from '@angular/core';
import { ShoesServiceService } from '../../services/shoes-service.service';
import { ActivatedRoute, RouterLinkActive } from '@angular/router';
import { IShoes } from '../../models/nike.model';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.css'
})
export class SearchResultsComponent implements OnInit {
  inputShoes!: string;


  constructor(private shoesService: ShoesServiceService, private route: ActivatedRoute){}

  shoes : IShoes [] = [];
 
 
  ngOnInit (): void{

    this.route.params.subscribe((params)=>{
      this.inputShoes=params['inputShoes'];
      this.shoesService.getSearch(this.inputShoes).subscribe((r: IShoes[])=>{
        this.shoes=r.filter(s=> s.nome.toLowerCase().includes(this.inputShoes))
      })
    })
  }
}
