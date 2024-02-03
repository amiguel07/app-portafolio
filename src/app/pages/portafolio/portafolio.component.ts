import { Component, OnInit } from '@angular/core';
import { Producto } from 'src/app/interfaces/product.interface';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit {


  constructor( public products:ProductsService){
  }

  ngOnInit() {
      
  }
}
