import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPage } from '../interfaces/info-page.service';

@Injectable({
  providedIn: 'root'
})
export class InfoPageService {

  info: InfoPage = {}; 
  cargada = false;

  constructor( private http : HttpClient) {
    //Leer archivo JSON
    this.http.get('assets/data/data-page.json')
    .subscribe ( (resp:InfoPage) => {
      this.cargada = true;
      this.info = resp;
      console.log( resp );
    });
   }
}
