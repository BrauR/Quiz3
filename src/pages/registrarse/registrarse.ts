import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';

/**
 * Generated class for the RegistrarsePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registrarse',
  templateUrl: 'registrarse.html',
})
export class RegistrarsePage {
  usuario = LoginPage;
  email = '';
  contra = '';
  

  usuarios = [
    {nombre: "Chavaschon", correo: "herrchavachon@gmail.com"},
    {nombre: "Becaaaa", correo: "papa_razo@gmail.com"}
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.usuario= this.navParams.get('usuarios');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrarsePage');
  }
  agregarUsuario() {
    
  }

}
