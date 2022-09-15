import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../Shared/shared.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  headerData:any = {
    "HeaderName":"Login"
  }
  constructor() { }

  ngOnInit() {
  }

}
