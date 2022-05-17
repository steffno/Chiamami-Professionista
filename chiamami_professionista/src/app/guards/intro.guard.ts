import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';




@Injectable({
  providedIn: 'root'
})

export class IntroGuard implements CanLoad {

// costruttore
  constructor(private router: Router, private storage: Storage){
    this.storage.create();
  }
//per fare in modo che l'app verifichi se l'utente abbia visto oppure no l'intro salviamo un booleano nello storage
// avremmo pure potuto usare la libreria Storage@Capacitor, che funziona meglio, a detta di internet, ma
// a lezione è stata spiegata iojnic@storage

    async canLoad(): Promise<boolean> {
      console.log('prima di const introVista');
      const introVista: boolean | void = await this.storage.get('intro');
      // FUNGEEEEEE
        console.log('intro vista e settata a: ', introVista);
        if(introVista && introVista === true){
          console.log('ho tornato true!');
          return true;
        }else{
          this.router.navigateByUrl('/intro', {replaceUrl:true});
          console.log('sto per ritornare false');
          return false;
        }
    }
  }

