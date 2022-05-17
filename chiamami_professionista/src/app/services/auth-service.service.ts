import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { map, tap, switchMap } from 'rxjs/operators';
import { BehaviorSubject, from, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  //inizializzo a null per filtrare il primo valore nella guardia (da impl)
  isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);

  constructor() { }

  //login dummy

  login(credentials: {email; password}){
    console.log('ciao ');
  }

}
