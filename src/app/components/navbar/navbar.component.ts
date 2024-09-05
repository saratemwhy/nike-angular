import { Component, OnInit } from '@angular/core';
import { INike, IShoes } from '../../models/nike.model';
import { ShoesServiceService } from '../../services/shoes-service.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { FormControl } from '@angular/forms';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {
  arrayEvidenza= ['Tutti i nuovi arrivi', 'Best seller', 'Member shop', 'Calendario dei lanci SNKRS', 'Shop Air', 'Summer of sport', 'I must-have per il rientro a scuola'];
  arrayIcone = ['Air Force 1', 'Air Jordan 1', 'Air Max', 'Dunk', 'Blazer', 'Pegasus', 'Mercurial'];
  arraySport = ['Calcio', 'Running', 'Basket', 'Fitness', 'Golf', 'Tennis', 'Yoga', 'Danza', 'Skateboard'];
  arrayTendenza = ['Air Max Home', 'Sneakers Y2K', 'Nike Style By', 'Teenager', 'EasyOn', 'Idee regalo Nike', 'Sostenibilità'];

  arrayUomoEvidenza = ['Novità', 'Best seller', 'Sneakers Y2K', 'Shop Air', 'Summer of Sport', 'I must have per il rientro a scuola'];
  arrayUomoScarpe = ['Tutte le scarpe', 'Lifestyle', 'Jordan', 'Running', 'Calcio', 'Basket', 'Fitness e training', 'Skateboard', 'Nike By You'];
  arrayUomoAbbigliamento = ["Tutto l'abbigliamento", 'Maglie e t-shirt', 'Felpe', 'Shorts', 'Pantaloni e tights', 'Tute', 'Giacche', 'Divise e maglie'];
  arrayUomoSport= ['Running', 'Calcio', 'Basket', 'Fitness e training', 'Tennis', 'Golf'];
  arrayUomoAccessori = ['Tutti gli accessori', 'Borse e zaini', 'Copricapi', 'Calze'];

  arrayDonnaEvidenza = ['Novità', 'Best seller', 'Nike Style By', 'Sneakers Y2K', 'Shop Air', 'Summer of Sport', 'I must have per il rientro a scuola'];
  arrayDonnaScarpe = ['Tutte le scarpe', 'Lifestyle', 'Jordan', 'Running', 'Fitness e training', 'Calcio', 'Nike By You'];
  arrayDonnaAbbigliamento = ["Tutto l'abbigliamento", 'Maglie e t-shirt', 'Felpe', 'Leggins', 'Shorts', 'Pantaloni', 'Set coordinati', 'Giacche', 'Reggiseni sportivi', 'Gonne e abiti'];
  arrayDonnaSport = ['Fitness', 'Running', 'Calcio', 'Basket', 'Tennis', 'Danza', 'Yoga', 'Golf'];
  arrayDonnaAccessori = ['Tutti gli accessori', 'Borse e zaini', 'Copricapi', 'Calze'];

  arrayKidsEvidenza = ['Novità', 'Best seller', 'Teenager', 'EasyOn', 'Shop Air', 'Summer of sport', 'I must-have per il rientro a scuola'];
  arrayKidsScarpe = ['Tutte le scarpe', 'Lifestyle', 'Jordan','Calcio', 'Running', 'Basket'];
  arrayKidsAbbigliamento = ["Tutto l'abbigliamento", 'Maglie e t-shirt', 'Felpe', 'Tute', 'Shorts', 'Abbigliamento sportivo', 'Pantaloni e leggins', 'Giacche', 'Divise e maglie', 'Gonne e abiti'];
  arrayKidsEta= ['Ragazzo/a (7-15 anni)', 'Bambino/a (3-7 anni)', 'Bebè e bimbo/a (0-3 anni)'];
  arrayKidsAccessori= ['Tutti gli accessori', 'Borse e zaini', 'Copricapi', 'Calze'];

  arrayOfferte = ['Tutte le offerte', 'Best seller', 'Ultima occasione'];
  arrayOfferteUomo = ['Tutte le offerte per uomo', 'Scarpe', 'Abbigliamento', 'Accessori'];
  arrayOfferteDonna = ['Tutte le offerte per donna', 'Scarpe', 'Abbigliamento', 'Accessori'];
  arrayOfferteKids = ['Tutte le offerte kids', 'Scarpe', 'Abbigliamento', 'Accessori'];
  arrayOfferteSport = ['Running', 'Calcio', 'Fitness e training', 'Basket', 'Tennis', 'Golf', 'Yoga'];

  constructor(private router: Router, private shoesService: ShoesServiceService, private route: ActivatedRoute) {}

  shoes : IShoes [] = [];
  searchShoes!: FormGroup;
  inputShoes!: string;

  ngOnInit(): void {
    this.searchShoes = new FormGroup({
      inputShoes : new FormControl('')
  })
  }

  goToShoes(i: string) {
    if (i === "Tutti i nuovi arrivi") {
      this.router.navigate(['/nuovi-arrivi']);
    }
    if (i === "Best seller") {
      this.router.navigate(['/best-seller']);
    }
  }

  goToSport(i: string) {
    if (i === "Calcio") {
      this.router.navigate(['/calcio']);
    }
    if (i === "Running") {
      this.router.navigate(['/running']);
    }
    if (i === "Basket") {
      this.router.navigate(['/basket'])
    }
  }


  onSubmit(){
    const inputShoes = this.searchShoes.get('inputShoes')!.value;
    this.router.navigate([inputShoes]);
    if(inputShoes){
      this.searchShoes.reset();
    }
    
  }
}


