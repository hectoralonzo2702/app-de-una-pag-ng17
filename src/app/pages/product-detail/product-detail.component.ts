import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { IProduct } from '../../models/product.model';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css'
})
export class ProductDetailComponent implements OnInit {


  loading: boolean = true;
  public product?: IProduct;

  //💉💉inyecciones de dependencia💉💉💉💉💉💉💉💉💉💉...
      //💉💉...👀👁‍🗨👀
      private _route = inject(ActivatedRoute);

      //💉💉...el servicio de las ("rutas")👀👁‍🗨👀
      private _apiService = inject(ApiService);


//Ciclo de vida del componente
ngOnInit(): void {
  //params:Un observable de los parámetros de consulta compartidos por todas las rutas
  this._route.params.subscribe(params => {//<== {id: '*'}
    // console.log('params==>',params)
    this._apiService.getProduct(params['id']).subscribe((data: IProduct) => {
      // console.log('#####',data)
      // console.log('=====>',this._apiService.getProduct(params['id']))
      this.product = data;
      this.loading = false;
    });
  })
}
}
