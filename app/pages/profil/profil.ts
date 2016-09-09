import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the ProfilPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/profil/profil.html',
})
export class ProfilPage {

  navVariables: {name: string, beschr: string};

  constructor(private nav: NavController) {
    this.navVariables =
    { name: window.localStorage.getItem('myName'),
      beschr: window.localStorage.getItem('beschreibung') };
  }

  askAction() {

    //

  }

}
