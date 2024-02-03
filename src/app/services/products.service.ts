import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Producto } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  loading = true;
  products: Producto[] = [];
  productsFilter: Producto[] = [];

  constructor(private http: HttpClient) {
    this.loadProducts();
  }

  public loadProducts() {
    return new Promise((resolve, reject) => {
      this.http.get('https://angular-html-e3683-default-rtdb.firebaseio.com/productos_idx.json')
        .subscribe((resp: Producto | any) => {
          this.products = resp;
          this.loading = false;
        });

    });
  }

  getProduct(id: string) {
    return this.http.get(`https://angular-html-e3683-default-rtdb.firebaseio.com/productos/${id}.json`);
  }

  searchProduct(value: string) {
    if (this.products.length == 0) {
      //cargar productos
      this.loadProducts().then(() => {
      // ejecutar después de tener los productos
      // Aplicar filtro
      this.filterProducts(value);
      });
      
    } else {
      this.filterProducts(value);
    }

    this.productsFilter = this.products.filter(produc => {
      return true;
    });

    console.log(this.productsFilter)
  }

  private filterProducts(value: string) {

    // console.log(this.products);
    this.productsFilter = [];
    value = value.toLocaleUpperCase();

    this.products.forEach(prod => {
      const titleLower = prod.titulo.toLocaleLowerCase();

      if (prod.categoria.indexOf(value) >= 0 || titleLower.indexOf(value) >= 0) {
        this.productsFilter.push(prod);
      }
    });
  }
}
