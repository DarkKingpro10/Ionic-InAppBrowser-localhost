import { Component, OnInit } from '@angular/core';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { App } from '@capacitor/app';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  constructor(private browser : InAppBrowser) {}
  ngOnInit(): void {
    const browserInstance = this.browser.create("http://192.168.1.3/despEsquivel/views/index.html","_self","location=no,hidenavigationbuttons=tru,zoom=no");
    browserInstance.on("exit").subscribe(evt => {
      App.exitApp();
    })
  }
}
