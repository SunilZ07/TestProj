import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';
import { BaseClass } from './Shared/base';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent extends BaseClass {
  pageMenu: any;
  constructor(
    private _platform: Platform,
    private _router: Router
  ) {
    super();
    _platform.ready().then(() => {
      localStorage.getItem('loggedUsername') !== null ? this.pageMenu = this.loginMenu : this.pageMenu = this.logoutMenu;
    })
  }

  openPage(page) {
    if(page.title == "Sign Out"){
      localStorage.clear();
    }
    this._router.navigateByUrl(page.url)

  }


}
