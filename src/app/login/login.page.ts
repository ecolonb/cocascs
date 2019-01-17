import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss']
})
export class LoginPage implements OnInit {
  public userName: String = '';
  public password: String = '';
  constructor(private router: Router) {}

  ngOnInit() {}
  login() {
    console.log('Iniciando sesión!');
    console.log('Usuario: ', this.userName);
    console.log('Password: ', this.password);
    this.router.navigate(['/']);
  }
  keyPressValidate(event: any) {
    if (event.charCode === 13) {
      this.login();
    }
  }
}
