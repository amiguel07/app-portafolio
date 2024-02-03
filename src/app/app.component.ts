import { Component } from '@angular/core';
import { InfoPageService } from './services/info-page.service';
import { ProductsService } from './services/products.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-portafolio';
  nick : string = 'AMIGUELDEV';

  constructor ( public infoPageService : InfoPageService,
    public products:ProductsService
    ){

  }
}
