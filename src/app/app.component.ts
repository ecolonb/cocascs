import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  private State = false;
  Pag2Page: any = null;
  public appMenu = [
    { title: 'Perfil', url: '/profile', icon: 'md-contact' },
    { title: 'Cocas', url: '/cocas', icon: 'ios-heart' },
    { title: 'Pedidos', url: '/orders', icon: 'ios-create' }
  ];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private router: Router,
    public navCtrl: NavController
  ) {
    this.initializeApp();
  }
  initializeApp() {
    this.platform.ready().then(() => {
      if (!this.State) {
        this.router.navigate(['login']);
      }
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  navToPage(UrlToNavigate: any) {
    console.log('NavTo: ', UrlToNavigate);
    this.router.navigate([UrlToNavigate]);
  }
  logOut() {
    console.log('LogOut: ');
    this.router.navigate(['login']);
  }
  goBack() {
    // this.navCtrl.navigateBack('/route');
    this.navCtrl.navigateBack('/route');
  }
}
