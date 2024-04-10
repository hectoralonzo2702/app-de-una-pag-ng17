import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  //inyeccion de dependencia sin usar el constructor
  private _http = inject(HttpClient);

  //...
  private urlBase: string = 'https://fakestoreapi.com/products'; 


  //llamamos a los servicios
  
      //Devuelve un Observable de todos los productos
      // Observable cuyo modelo es: <IProduct[]> array de products
      getProducts(): Observable<IProduct[]>{
        return this._http.get<IProduct[]>(this.urlBase);
      }

      //Devuelve un Observable de un solo producto
      // Observable cuyo modelo es: <IProduct> un solo product
      getProduct(id: number): Observable<IProduct>{
        return this._http.get<IProduct>(`${this.urlBase}/${id}`);
      }





  constructor() { }
}
