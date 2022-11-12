import { Component, OnInit } from '@angular/core';
import { Login } from '../../Models/Login';
import { LoginService } from '../../Services/login.service';
import { SharedModule } from '../../Shared/shared.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginData:Login
  headerData:any = {
    "HeaderName":"Login"
  }
  constructor(
    private loginService:LoginService
  ) {
    this.loginData = <Login>{};
   
   }

  ngOnInit() {
  }

  Login(){
    this.loginService.doLogin(this.loginData).subscribe(res=>{console.log(res)})
  }
  

}
