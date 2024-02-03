import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';
import { ProductDescription } from '../../interfaces/product-description.interface';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit{

  producto: ProductDescription = {};
  id : string = '';

  constructor( private route:ActivatedRoute, 
               public productService:ProductsService
    ){

  }

  ngOnInit() {
      this.route.params
      .subscribe( params => {
        this.productService.getProduct(params['id'])
        .subscribe( (product : ProductDescription | any ) => {
          this.id = params['id'];
          this.producto = product;
        });
      });
      
  }
}
