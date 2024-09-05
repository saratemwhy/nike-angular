import { Component} from '@angular/core';
import { ShoesServiceService } from '../../services/shoes-service.service';
import { IShoes } from '../../models/nike.model';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ICart } from '../../models/carrello.model';




@Component({
  selector: 'app-dettaglio',
  templateUrl: './dettaglio.component.html',
  styleUrl: './dettaglio.component.css'
})
export class DettaglioComponent {

  constructor(private shoesService: ShoesServiceService, private route: ActivatedRoute, private router: Router){}


  shoes : IShoes [] = [];
  checked:boolean=false;
  colorForm!: FormGroup;
  selectedColor!: string;
  sizeForm!: FormGroup;
  selectedSize!: string;
  purchase: ICart[]=[];
  id!:number;
  arrayShoes!:[];
  doubleItem: ICart[]=[];

  getDataFromId(){ //chiamata che mi permette di ottenere i dati in base all'id
    const id = this.route.snapshot.paramMap.get('id');
    this.shoesService.getDetail(+id!).subscribe(r => {
      this.shoes=r.filter(d=> d.id.toString()===id);
    });
  }

  ngOnInit (): void{ //eseguo la funzione getDataFromId e dichiaro i formgorup con i validators
    this.getDataFromId();
    this.colorForm = new FormGroup({
      selectedColor: new FormControl('', Validators.required)
    })
    this.sizeForm = new FormGroup({
      selectedSize: new FormControl('', Validators.required)
    })
  }

  addToCart(){
    //ottengo il valore del colore scelto e della taglia scelta
    const coloreScelto = this.colorForm.get('selectedColor')?.value;
    const tagliaScelta = this.sizeForm.get('selectedSize')?.value;
    //ottengo il contenuto del prodotto selezionato da inviare alla chiamata post
    const name = document.getElementById('name')?.textContent;
    const price = document.getElementById('price')?.textContent;
    const image = document.getElementById('image')?.getAttribute('src');
    
    //se colore e taglia hanno un valore vuoto allora mostro lo span con i bordi rossi e un messaggio di errore
    if(coloreScelto===""){ 
      document.getElementById('errorSpanColor')?.setAttribute("style", "border: 1px solid red");
      document.getElementById('errorMessageColor')?.setAttribute("style", "display:visible; color:red;");
    }
    if(tagliaScelta===""){
      document.getElementById('errorSpanSize')?.setAttribute("style", "border: 1px solid red");
      document.getElementById('errorMessageSize')?.setAttribute("style", "display:visible; color:red;");
    }

    //se entrambe le condizioni sono soddisfatte, credo una variabile che contiene i dati relativi al prodotto selezionato con il colore e la taglia scelti
    if(coloreScelto!="" && tagliaScelta!=""){
      const arrayShoes: ICart = {
        id: this.id,
        nome: name,
        prezzo: price,
        immagine: image,
        colore_scelto: coloreScelto,
        taglia_scelta: tagliaScelta
      };
      
      //eseguo prima getPurchase per mandare i dati selezionati dall'utente al file json nella sezione carrello
      this.shoesService.getPurchase(arrayShoes).subscribe(r => {
        // eseguo getNewPurchase per aggiornare i dati del model quando viene aggiunto un prodotto al file json carrello
        this.shoesService.getNewPurchase().subscribe(items => {
          this.purchase = items;
          this.countDuplicates(arrayShoes);
        });
      });
    }
  }

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
  
  //al click su colore e taglia, se il contenuto non è vuoto allora tolgo i bordi rossi allo span e il messaggio di errore
  colorsClick(a:string){
    if(a){ 
      document.getElementById('errorSpanColor')?.setAttribute("style", "border: none");
      document.getElementById('errorMessageColor')?.setAttribute("style", "display:none")
    }
  }

  sizeClick(e:string){
    if(e){
      document.getElementById('errorSpanSize')?.setAttribute("style", "border: none");
      document.getElementById('errorMessageSize')?.setAttribute("style", "display:none")
    }
  }

  goToCart(){
    this.router.navigate(['/carrello'])
  }
  
}
