import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import { LangChangeEvent, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
   loginFormModel: FormGroup;
  private loginTitle: string;
  private loginSubTitle: string;

  constructor(
    private fb: FormBuilder,
    private alertConrtroller: AlertController,
    private router: Router,
    private loadingController: LoadingController,
    private translateService: TranslateService,
    private authService: AuthServiceService
  ) {}

  ngOnInit() {
    //dummy login validator
    this.loginFormModel=this.fb.group({
      email: ['sdidionisio@gmail.com', [Validators.required, Validators.email]],
      password: ['1234', [Validators.required, Validators.minLength(4)]]
    });
    this.initTranslate();
  }

  async login() {
    const loading = await this.loadingController.create();
    await loading.present();

    this.authService.login(this.loginFormModel.value);
    this.router.navigateByUrl('/home', {replaceUrl:true});
  }

  async initTranslate() {
    this.translateService.get('LOGIN_ERROR_SUB_TITLE').subscribe((data) => {
      this.loginSubTitle = data;
    });
    this.translateService.get('LOGIN_ERROR_TITLE').subscribe((data) => {
      this.loginTitle = data;
    });
  }

}
