import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validator } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  private loginFormModel: FormGroup;
  private loginTitle: string;
  private loginSubtitle: string;

  constructor(private formBuilder: FormBuilder,
    private alertController: AlertController,
    private translateService: TranslateService,
    private navController: NavController) {}

  ngOnInit() {
  }

}
