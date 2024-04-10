import { Component, OnInit, inject } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { IProduct } from '../../models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'

  
})
export class ProductsComponent implements OnInit {


  //...Interface
  productList: IProduct [] = [];

  //💉💉inyecciones de dependencia💉💉💉💉💉💉💉💉💉💉...
      //💉💉...el servicio de las api's
      private _apiService = inject(ApiService);

      //💉💉...el servicio de las ("rutas")👀👁‍🗨👀
      private _router = inject(Router);

      //...

//Ciclo de vida del componente
ngOnInit(): void {
  this._apiService.getProducts().subscribe((data: IProduct[]) => {
    this.productList = data;//<== [] de 20 objs
    // console.log(data)//<== [] de 20 objs
  });
}


//metodos/funciones

  //metodo navegate se ejecuta al hacer click en el button: "detail" en vista local
  navegate(id: number): void {
    //recibo un objeto, parece una promesa (•_•) (•_•)
    this._router.navigate(['/products', id]);//<== le concatena el id a la ruta resultando en ==>/products/id y redirige al Comp productDetailComp
    alert(`se ejecuta navegate(***)${id}`)
    // console.log(this._router.navigate(['/products', id]))
  }


}
