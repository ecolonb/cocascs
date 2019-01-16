import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-cocas',
  templateUrl: './cocas.page.html',
  styleUrls: ['./cocas.page.scss']
})
export class CocasPage implements OnInit {
  constructor(public navCtrl: NavController) {}

  ngOnInit() {}
  _goBack() {
    // this.navCtrl.navigateBack('/route');
    this.navCtrl.goBack();
  }
}
