import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Login } from '../Models/Login';
import * as GlobalUrl from "../Shared/global"
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http:HttpClient
  ) { }

  

  doLogin(loginData:Login){
    console.log(loginData)
    return this.http.post(GlobalUrl.DomainUrl,loginData)
  }

}
