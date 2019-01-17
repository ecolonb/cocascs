import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-recovery-password',
  templateUrl: './recovery-password.page.html',
  styleUrls: ['./recovery-password.page.scss']
})
export class RecoveryPasswordPage implements OnInit {
  constructor(private navCtr: NavController) {}

  ngOnInit() {}
  _goBack() {
    this.navCtr.goBack();
  }
}
