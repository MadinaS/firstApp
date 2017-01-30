import { Component } from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';

/*
  Generated class for the NachrichtPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/nachricht/nachricht.html',
})
export class NachrichtPage {

  constructor(public nav: NavController, private navParams: NavParams, private viewCtrl: ViewController) {

    console.log( navParams.get('id') )
  }

  ionViewWillEnter() {
    this.viewCtrl.showBackButton(true);
    this.viewCtrl.setBackButtonText('Eingang');
  }

}
