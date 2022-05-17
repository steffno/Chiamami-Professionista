import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  credentials: FormGroup;

  constructor(
    private fb: FormBuilder,
    private alertConrtroller: AlertController,
    private router: Router,
    private loadingController: LoadingController,
    private authService: AuthServiceService
  ) { }

  ngOnInit() {
    this.credentials=this.fb.group({
      email: ['sdidionisio@gmail.com', [Validators.required, Validators.email]],
      password: ['1234', [Validators.required, Validators.minLength(4)]]
    });
  }

  async login() {
    const loading = await this.loadingController.create();
    await loading.present();

    this.authService.login(this.credentials.value);
    this.router.navigateByUrl('/home', {replaceUrl:true});
  }

}
