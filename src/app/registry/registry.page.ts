import { AreaService } from './../services/area.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { PlayerService } from './../services/player.service';
import { AlertController } from '@ionic/angular';
import { PopoverController } from '@ionic/angular';
// import { PopoverComponent } from '../../component/popover/popover.component';
import * as bcrypt from 'bcryptjs';
@Component({
  selector: 'app-registry',
  templateUrl: './registry.page.html',
  styleUrls: ['./registry.page.scss']
})
export class RegistryPage implements OnInit {
  validForm = true;
  password = '';
  cpassword = '';
  name = '';
  userData = {
    area: 'default',
    name: '',
    lastname: '',
    email: '',
    role: '',
    user: '',
    password: '',
    gender: ''
  };
  listAreas = [{}];
  constructor(
    private navtCtrl: NavController,
    private areaService: AreaService,
    private playerService: PlayerService,
    public alertController: AlertController
  ) {}

  ngOnInit() {
    this.getAllArea()
      .then((reultPromise: any) => {
        console.log('reultPromise: ', reultPromise);
        this.listAreas = reultPromise.data;
      })
      .catch(errc => {
        // Mostrar alert => { ocurrio un error al cargar lista de categorías }
        console.log('errc: ', errc);
      });
  }
  _goBack() {
    this.navtCtrl.goBack();
  }
  saveData() {
    const r_male = document.getElementById('radio_male') as HTMLInputElement;
    const r_female = document.getElementById(
      'radio_female'
    ) as HTMLInputElement;
    if (r_male.checked === true) {
      this.userData.gender = 'male';
    } else if (r_female.checked === true) {
      this.userData.gender = 'female';
    } else {
      this.userData.gender = 'undefined';
    }
    // const bcrypt = require('bcrypt');

    //  bcrypt.hashSync(this.userData.password,7).then((result)=>{
    //    console.log('result: ', result)

    //  });
    const salt = bcrypt.genSaltSync(7);
    const hash = bcrypt.hashSync(this.password, salt);
    this.userData.password = hash;
    //  bcrypt.genSalt(this.userData.password,7).then((result) => {
    //   this.userData.password = result;
    // });
    this.playerService
      .newPlayer(this.userData)
      .then(result => {
        console.log('result: ', result);
        console.log('User data: ', this.userData);
      })
      .catch(err_ => {
        console.log('Err_ ', err_);
        console.log('User data: ', this.userData);
      });
  }

  // Peticion GET que obtiene el lsitado de las areas
  getAllArea() {
    const areasPromise = new Promise((resolve, reject) => {
      // Para obtener las lista de areas se hace a traves de un servicio (Ahi se realizan todas las peticiones HTTP)
      this.areaService
        .getAllAreas()
        .then(result => {
          this.presentAlert();
          resolve(result);
        })
        .catch(err => {
          reject(err);
        });
    });
    return areasPromise;
  }
  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: 'Message <strong>text</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: blah => {
            console.log('Confirm Cancel: blah');
          }
        },
        {
          text: 'Okay',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();
  }
  validateFormData(formData: any): Boolean {
    console.log('formData: ', formData);
    return false;
  }
  validateUsername(event: any): Boolean {
    console.log('Validando el nombre de usuario: ', this.userData.user);
    if (this.userData.user === '' || this.userData.user == null) {
      return;
    }
    this.playerService
      .validateUserName(this.userData.user.trim())
      .then((response: any) => {
        const alertElement = document.getElementById(
          'iduserNameValidation'
        ) as HTMLElement;
        const alertEmailElement = document.getElementById(
          'iduserEmailValidation'
        ) as HTMLElement;

        if (response.user_av === false) {
          alertElement.style.display = 'block';
          alertEmailElement.style.display = 'block';
        } else {
          alertElement.style.display = 'none';
          alertEmailElement.style.display = 'none';
        }
        console.log('Respponse: ', response);
      })
      .catch(err_ => {
        console.log('Ocurrio un error', err_);
      });
    return false;
  }
  validateEmail(event: any): Boolean {
    console.log('Validando el Email: ', this.userData.email);
    if (this.userData.email === '' || this.userData.email == null) {
      return;
    }
    this.playerService
      .validateEmail(this.userData.email.trim())
      .then((response: any) => {
        const alertEmailElement = document.getElementById(
          'iduserEmailValidation'
        ) as HTMLElement;

        if (response.email_av === false) {
          alertEmailElement.style.display = 'block';
        } else {
          alertEmailElement.style.display = 'none';
        }
        console.log('Respponse: ', response);
      })
      .catch(err_ => {
        console.log('Ocurrio un error', err_);
      });
    return false;
  }
  showAlertPopOver(element: any) {
    const rect = element.getBoundingClientRect();
    console.log('rect: ', rect);
    console.log('Evento: ', element);
  }
}
