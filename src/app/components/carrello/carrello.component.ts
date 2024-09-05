import { Component } from '@angular/core';
import { ICart } from '../../models/carrello.model';
import { ShoesServiceService } from '../../services/shoes-service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-carrello',
  templateUrl: './carrello.component.html',
  styleUrl: './carrello.component.css'
})
export class CarrelloComponent {

  constructor(private shoesService: ShoesServiceService, private route: ActivatedRoute, private router: Router){}
  
  purchase: ICart[]=[];
  counter!: string;
  c!: number;
  pr!:number;
  cn!:number;
  newPrice!: string;
  sum!:number;
  item!: ICart;
  index!:number;
  

  ngOnInit (): void{ 
    
    this.shoesService.getNewPurchase().subscribe(x=>{
      this.purchase=x;
      console.log(this.purchase)

      let subtotale=document.getElementById('subtotale') as HTMLParagraphElement;
      let totale=document.getElementById('totale') as HTMLParagraphElement;
      let pre = this.purchase.map(item=>item.prezzo.replace('€',''));

      let sum = 0;
      for (let i = 0; i < pre.length; i++) {
        sum += Number(pre[i]);
      }
      subtotale.innerHTML=sum.toFixed(2);
      totale.innerHTML=sum.toFixed(2);
    })
  
  }

  
  //RIPETO LOGICA DELL'ANTEPRIMA PER GESTIRE LE QUANTITA'
  //function che mi permette di contare i duplicati dell'array in base al nome, al colore e alla taglia
  countDuplicates(doubleItem: ICart) {
    const count = this.purchase.filter(item => //creo una variabile count che ha come valore la lunghezza di un array filtrato in base al nome
      item.nome === doubleItem.nome //se il nome di item è uguale a quello di doubleItem (definito sopra)
      && item.colore_scelto === doubleItem.colore_scelto
      && item.taglia_scelta === doubleItem.taglia_scelta
    ).length;
    return count; //mi restituisce count
  }

  //function che mi permette di accedere ai dati della function countDuplicates per usarli nell'*ngFor
  getItemCount(item: ICart) {
    return this.countDuplicates(item);
  }

  //function che mi permette di mostrare nell'html un solo item se è doppio
  getOneItem(item: ICart):boolean{
    return this.purchase.findIndex(p => 
      p.nome === item.nome
      && p.colore_scelto === item.colore_scelto
      && p.taglia_scelta === item.taglia_scelta
    ) === this.purchase.indexOf(item);
  }

  //funzione per eliminare un solo elemento per volta quando decremento la quantità
  deleteJustOneItem(i: number): void {
    const itemToDelete = this.purchase[i]; // Ottengo l'elemento da eliminare in base all'indice

      // Chiamata al servizio per eliminare l'elemento dal json
      this.shoesService.deleteItems(itemToDelete.id.toString()).subscribe(
          (response) => {
              // Rimuovo l'elemento con splice
              this.purchase.splice(i, 1);
              this.updateSubtotal(); 
          }
      );
  }
  
  //funzione per aggiungere un solo elemento per volta quando incremento la quantità
  addJustOneItem(item: ICart): void {
    this.shoesService.getPurchase(item).subscribe( //utilizzo la chiamata getPurchase
        (response) => {
            console.log(response);
        }
    );
  }

  //function per diminuire quantità
  removeItem(i:number, p:any){
    let counter = document.getElementById('buttonCount'+[i]) as HTMLParagraphElement;
    let price = document.getElementById('priceCount'+[i]) as HTMLParagraphElement;
    let subtotale = document.getElementById('subtotale') as HTMLParagraphElement;
    let totale=document.getElementById('totale') as HTMLParagraphElement;
    
    if(Number(counter.textContent)>1){ //la funzione viene eseguita se la quantità è maggiore di 1
      
      //quando clicco sul button la quantità viene decrementata di 1 e con innerHTML aggiorno la quantità nel button centrale
      this.c= Number(counter.textContent)-1;
      counter.innerHTML=this.c.toString();
      //con la variabile cn ottengo la quantità e la moltiplico per il prezzo iniziale
      let cn= Number(counter.textContent);
      this.purchase.filter(r=>{
        this.pr=r.prezzo
      });
      //con innerHTML aggiorno il prezzo moltiplicando il prezzo iniziale(pr) per la quantità aggiornata (cn)
      //dal momento che è presente del testo nel prezzo, con il metodo replace tolgo il testo per moltiplicare e lo aggiungo per mandare a video il nuovo prezzo
      let newPrice= (Number(this.pr.toString().replace('€',''))*cn).toString().replace('', 'Prezzo: €');
      price.innerHTML=newPrice;
      let s = (Number(subtotale.textContent)-(Number(this.pr.toString().replace('€','')))).toString();
      subtotale.innerHTML=Number(s).toFixed(2);
      totale.innerHTML=Number(s).toFixed(2);
      this.deleteJustOneItem(i);
      }
  }

  //function per aumentare quantità -> segue la stessa logica di sopra ma incremento di 1 al click
  addItem(i:number, p:any){
    let counter = document.getElementById('buttonCount'+[i]) as HTMLParagraphElement;
    let price = document.getElementById('priceCount'+[i]) as HTMLParagraphElement;
    let subtotale = document.getElementById('subtotale') as HTMLParagraphElement;
    let totale=document.getElementById('totale') as HTMLParagraphElement;

    if(Number(counter.textContent)===10){
      return
    }else{
      this.c= Number(counter.textContent)+1;
      counter.innerHTML=this.c.toString();

      let cn= Number(counter.textContent);
      this.purchase.filter(r=>{
        this.pr=r.prezzo
      });
      let newPrice = (Number(this.pr.toString().replace('€',''))*cn).toString().replace('', 'Prezzo: €');
      price.innerHTML=newPrice;
      let s = (Number(subtotale.textContent)+(Number(this.pr.toString().replace('€','')))).toString();
      subtotale.innerHTML=Number(s).toFixed(2);
      totale.innerHTML=Number(s).toFixed(2);
      // Ottengo l'elemento da aggiungere in base all'indice
      const itemToAdd = this.purchase[i];

      // Chiamo la function addJustOneItem per aggiungere l'elemento al json
      this.addJustOneItem(itemToAdd);
    }
    
  }


  //funzione per rimuovere elementi
  deleteItem(p: ICart): void {
  //così è come l'avevo scritto io ma non funzionava
  /*deleteItem(p:any, i:number, id:number){
    this.purchase.map(r=>{
      let nome = r.nome;
      let colore = r.colore_scelto;
     
      if(nome===p.nome&&colore===p.colore_scelto){
        this.shoesService.deleteItems(id).subscribe(
          (r: ICart): void => {
            this.purchase.splice(r.id,1)
          }
        );
        
      }
    })*/

    // Filtro in base al nome, colore e taglia scelta
    const itemsToDelete = this.purchase.filter(r => 
        r.nome === p.nome && 
        r.colore_scelto === p.colore_scelto && 
        r.taglia_scelta === p.taglia_scelta
    );

    // Creo un array di elementi da eliminare
    const deleteRequests = itemsToDelete.map(item => 
        this.shoesService.deleteItems(item.id.toString())
    );

    // Uso il metodo forkjoin per gestire l'observable e cancellare gli elementi dell'array deleteRequests
    forkJoin(deleteRequests).subscribe(
        (responses: ICart[]) => {
            // Rimuovo gli elementi dall'array originale purchase
            itemsToDelete.forEach(item => {
                const index = this.purchase.indexOf(item);
                if (index > -1) {
                    this.purchase.splice(index, 1);
                }
            });
            this.updateSubtotal(); // Aggiorno il totale
        }
    );
  }
  //aggiorno il subtotale
  updateSubtotal(): void {
    let subtotale=document.getElementById('subtotale') as HTMLParagraphElement;
      let totale=document.getElementById('totale') as HTMLParagraphElement;
      let pre = this.purchase.map(item=>item.prezzo.replace('€',''));

      let sum = 0;
      for (let i = 0; i < pre.length; i++) {
        sum += Number(pre[i]);
      }
      subtotale.innerHTML=sum.toFixed(2);
      totale.innerHTML=sum.toFixed(2);
  }

  showData(){
    const cartAccordion= document.getElementById('cart-one');
    const dataAccordion = document.getElementById('data-two');

    cartAccordion?.setAttribute('class', 'accordion-collapse collapse')
    dataAccordion?.setAttribute('class', 'accordion-collapse collapse show');
  }
} 

  

