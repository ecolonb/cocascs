import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss']
})
export class OrdersPage implements OnInit {
  constructor(public navCtrl: NavController) {}

  ngOnInit() {}
  _goBack() {
    // this.navCtrl.navigateBack('/route');
    this.navCtrl.goBack();
  }
}
