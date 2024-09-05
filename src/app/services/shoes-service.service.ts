import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { INike, IShoes } from '../models/nike.model';
import { ICart } from '../models/carrello.model';


@Injectable({
  providedIn: 'root'
})
export class ShoesServiceService {

  constructor(private http: HttpClient) { }

  private apiKey = `API_KEY`;

  getShoes (): Observable<IShoes[]> {
    return this.http.get<IShoes[]>('http://localhost:3000/prodotti');
  }

  getSearch (inputShoes: string): Observable<IShoes[]> {
    return this.http.get<IShoes[]>(`http://localhost:3000/prodotti?q=${inputShoes}`);
  }

  getDetail (id: number): Observable<IShoes[]> {
    return this.http.get<IShoes[]>(`http://localhost:3000/prodotti?q=dettaglio?q=${id}`);
  }
  
  //mando i dati selezionati dall'utente al file json nella sezione carrello
  getPurchase (arrayShoes: ICart): Observable<ICart> {
    return this.http.post<ICart>("http://localhost:3000/carrello", arrayShoes);
  }

  //prendo i dati inviati al file json con la chiamata getPurchase per mostrarli nel model e nel carrello
  getNewPurchase (): Observable<ICart[]>{
    return this.http.get<ICart[]>("http://localhost:3000/carrello")
  }
  //elimino gli elementi in base all'id
  deleteItems(id: string): Observable<ICart> {
    return this.http.delete<ICart>(`http://localhost:3000/carrello/${id}`);
  }


}
  

