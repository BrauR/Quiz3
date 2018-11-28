import { Component } from '@angular/core';
import { AlertController,NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { RegistrarsePage } from '../registrarse/registrarse';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  inicio = LoginPage;
  regis = RegistrarsePage;
  nota = '';
  nota2 = '';
  notas = []

  usuarios = [
    {nombre:"Brau"  ,email: "likitu264@gmail.com", contraseña: "contraseña"}
  ]

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public storage: Storage) {
    this.storage.keys()
                .then(keys => {
                  if(keys.some(key => key == 'notas')){
                    this.storage.get('notas')
                    .then(notas => {
                      this.notas = JSON.parse(notas);
                    })
                  }
                })
                 

  }
  clickInicio() {
    let index = this.usuarios.findIndex(U => U.email == this.nota && U.contraseña == this.nota2);

  if(this.nota.length > 0 && this.nota2.length > 0 )
  {
    console.log("Inicio de sesión exitosa.")
    const alert = this.alertCtrl.create({
      title: "Hello there :D",
      subTitle: "Sesión iniciada",
      buttons: ['Okay']
    });
    alert.present();
  }
  else{
    console.log("Faltaron parámetros")
    const alert = this.alertCtrl.create({
      title: "Oops!",
      subTitle: "Faltaron parámetros",
      buttons: ['Ok']
    });
    alert.present();
  }
  }

  clickRegistrarse(){
    this.navCtrl.push(this.regis, {Usuarios: this.usuarios});
    this.storage.set('notas', JSON.stringify(this.notas));
  }


}
