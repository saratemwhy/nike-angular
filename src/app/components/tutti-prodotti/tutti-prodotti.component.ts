import { Component } from '@angular/core';
import { ShoesServiceService } from '../../services/shoes-service.service';
import { IShoes } from '../../models/nike.model';
import { colorsData } from '../../data/filter.data';
import { Colors } from '../../models/filter.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tutti-prodotti',
  templateUrl: './tutti-prodotti.component.html',
  styleUrl: './tutti-prodotti.component.css'
})
export class TuttiProdottiComponent {

  constructor(private shoesService: ShoesServiceService, private router: Router){}  

  shoes : IShoes [] = [];
  shoesToShow=20; //stabilisco con una variabile il numero di scarpe da mostrare inizialmente
  colors : Colors [] = colorsData;
  price = ["Inferiore a 50€", "50€ - 100€", "100€ - 150€", "Superiore a 150€"]; //array di prezzi
  checked!:boolean; //const checked di tipo boolean per il checkbox price
  selected!:boolean;
  select!:boolean;
  
  getAllShoes(){
    this.shoesService.getShoes().subscribe((r: IShoes[]) => { //con una chiamata subscribe ottengo tutti gli elementi del file json
      this.shoes=r;
    })
  }

  ngOnInit (): void{
     this.getAllShoes();
  }

  showMore(){ //aggiungo 20 scarpe ad ogni click riassegnando il valore alla variabile shoesToShow
    this.shoesToShow += 10;
    if(this.shoesToShow>=this.shoes.length){ //se il numero di scarpe mostrate è >= alla lunghezza dell'array di scarpe,allora assegno al button l'attributo hidden
      document.getElementById('buttonN')?.toggleAttribute('hidden');
    }
  }

  trackByFn(index: number, s:IShoes){ //dichiaro la funzione che identifica in modo univoco gli elementi del mio array shoes tramite l'id
    return s.id;
  }

  getCategory() { //creo una funzione che con il metodo new set e filter mi permette di ottenere solo i valori unici della chiave "categoria" del file json
    const categories = new Set();
    return this.shoes.filter(r => {
      if (categories.has(r.categoria)) {
        return false;
      } else {
        categories.add(r.categoria);
        return true;
      }
    });
  }

  //funzione che filtra sulle categorie
  categoryFilter (n:string, event: any) {
    const selected = event.target.checked;
    const categorie = this.getCategory().filter(r=>{
      const a = r.categoria;
        if(selected && n===a){
          this.selected=true;
          this.shoes=this.shoes.filter(i=>i.categoria===a);
        }else if (!selected && n===a){
          this.selected=false;
          this.getAllShoes();
        }
    })
    
  }

  //funzione che filtra sui colori

  colorsFilter(c:string, event:any){
    const select = event.target.checked;
    const colori = this.colors.filter(e => {
      const x = e.colore;
      if(select && c===x){
        this.select=true;
        console.log(this.select)
        this.shoes=this.shoes.filter(i=>i.colori_disponibili.find(d=>d.toString()===x));
      }else if (!select && c===x){
        this.select=false;
        console.log(this.select)
        this.getAllShoes();
      }
    })
  
  }
  
 

  //funzione che filtra sul prezzo
  priceFilter(p: string, event: any) {
    
    const checked=event.target.checked;

      if(checked && p==="Inferiore a 50€"){
        this.checked=true;
        this.shoes=this.shoes.filter(i=>i.prezzo<50);
      }else if (!checked && p==="Inferiore a 50€"){
        this.checked=false;
        this.getAllShoes();
      }

      if(checked && p==="50€ - 100€"){
        this.checked=true;
        this.shoes=this.shoes.filter(i=>i.prezzo>=50 && i.prezzo<=100);
      }else if (!checked && p==="50€ - 100€"){
        this.checked=false;
        this.getAllShoes();
      }

      if(checked && p==="100€ - 150€"){
        this.checked=true;
        this.shoes=this.shoes.filter(i=>i.prezzo>=100 && i.prezzo<=150);
      }else if (!checked && p==="100€ - 150€"){
        this.checked=false;
        this.getAllShoes();
      }

      if(checked && p==="Superiore a 150€"){
        this.checked=true;
        this.shoes=this.shoes.filter(i=>i.prezzo>=150);
      }else if (!checked && p==="Superiore a 150€"){
        this.checked=false;
        this.getAllShoes();
      }
  }


  productDetail (id:number){
    this.router.navigate(['/dettaglio', id]);
  }
}





