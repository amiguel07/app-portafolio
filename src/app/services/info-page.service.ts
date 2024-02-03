import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPage } from '../interfaces/info-page.interface';

@Injectable({
  providedIn: 'root'
})
export class InfoPageService {

  info: InfoPage  = {}; 
  cargada = false;
  equipo: any [] = [];
  

  constructor( private http : HttpClient ) {
    this.loadInfo();
    this.loadEquipo();
   }

   private loadInfo(){
    //Leer archivo JSON
    this.http.get('assets/data/data-page.json')
    .subscribe ( (resp:InfoPage) => {
      this.cargada = true;
      this.info = resp;
    });
   }

  private loadEquipo() {
    this.http.get('https://angular-html-e3683-default-rtdb.firebaseio.com/equipo.json')
      .subscribe( (resp:any) => {
        this.equipo = resp;
        // console.log(resp);
      });
  }

}
