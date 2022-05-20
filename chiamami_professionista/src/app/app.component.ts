import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';
import { LinguaService } from './services/lingua.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent{
  constructor(private translate: TranslateService, private linguaService: LinguaService, private platform: Platform) {
    this.platform.ready().then(() => {
      this.initTranslate();
    });
  }

  initTranslate() {
     // Set the default language for translation strings, and the current language.
     const linguaPreferita = this.linguaService.getLinguaPreferita();
     this.translate.setDefaultLang(linguaPreferita);
     this.linguaService.getLinguaAttuale().subscribe((lingua: string) => {
         if (lingua != null) {
             this.translate.use(lingua);
         } else {
             this.translate.use(linguaPreferita);
             this.linguaService.updateLingua(linguaPreferita);
         }
     });
  }
}
