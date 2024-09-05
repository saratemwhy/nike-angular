import { Component } from '@angular/core';
import { Shoes } from '../../models/homepage.model';
import {advertise1, advertise2, categoria1, categoria2, scarpe1, scarpe2, scarpe3, sport1, sport2, sport3 } from '../../data/homepage.data';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
    scarpeUno : Shoes [] = scarpe1;
    scarpeDue : Shoes [] = scarpe2;
    scarpeTre : Shoes [] = scarpe3; 

    advertiseUno : Shoes [] = advertise1;
    advertiseDue : Shoes [] = advertise2;

    sportUno : Shoes [] = sport1;
    sportDue : Shoes [] = sport2;
    sportTre : Shoes [] = sport3;

    categoriaUno : Shoes [] = categoria1;
    categoriaDue : Shoes [] = categoria2;
    
}
