import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {
  @ViewChild(IonSlides)slides: IonSlides;

  // piccola nota: ionslides sarà rimpiazziato da swiper.js nella prossima veriosne di ionic

  constructor(private router: Router, private storage: Storage) {
     this.storage.create();
  }

  ngOnInit() {
  }

  next() {
    this.slides.slideNext();
  }

  async start(){
    await this.storage.set('intro', true);
    console.log('in async start setto intro a true', this.storage.get('intro'));
    this.router.navigateByUrl('/login', {replaceUrl:true});
  }

  async posizione(){
    console.log('sono in posizione()');
    const coord = await Geolocation.getCurrentPosition();
    console.log('Ho fatto coord e il suo valore è: ', coord);
    //richiesta dummy per far accettare il permesso delle coordinate'
    //adesso possiamo andarealla pagina seguente
    this.next();
  }

}
