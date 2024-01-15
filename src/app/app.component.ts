import { Component } from '@angular/core';
import { InfoPageService } from './services/info-page.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-prueba';
  nick : string = 'AMIGUELDEV';

  constructor ( public infoPageService : InfoPageService ){

  }
}
