export interface INike {
    prodotti: IShoes[]
  }
  
  export interface IShoes {
    id: number
    nome: string
    categoria: string
    prezzo: number
    taglie_disponibili: string[]
    colori_disponibili: string[]
    descrizione: string
    immagine: string
    url1: string
    url2: string
    url3: string
    url4: string
    nuovo_arrivo: boolean
    best_seller: number
  }