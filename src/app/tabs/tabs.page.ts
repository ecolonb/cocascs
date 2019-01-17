import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  constructor(private menu: MenuController) {}

  showMenu() {
    console.log('Mostrar sideMenu');
    this.menu.toggle();
  }
}
