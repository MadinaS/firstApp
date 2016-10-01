import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the NachrichtPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/nachricht/nachricht.html',
})
export class NachrichtPage {

  constructor(private nav: NavController, private navParams: NavParams) {
    console.log( navParams.get('id') )
  }

}
