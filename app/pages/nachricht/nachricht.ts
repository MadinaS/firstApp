import { Component } from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';
import {SQLite} from "ionic-native/dist/index";

/*
  Generated class for the NachrichtPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/nachricht/nachricht.html',
})
export class NachrichtPage {

  public database: SQLite;
  public messageInfo: Array<Object>;


  constructor(public nav: NavController, private navParams: NavParams, private viewCtrl: ViewController) {
    let messageId = navParams.get('id');
    this.database = new SQLite();
    this.database.openDatabase({name: "data.db", location: "default"}).then(() => {

      this.database.executeSql("SELECT * FROM nachrichten WHERE id=?", [messageId]).then((data) => {

        if(data.rows.length > 0) {
          let d = new Date(data.rows.item(0).mTime*1000);
          let day;
          let month;

          if ( d.getDay() < 10 )
            day = '0'+d.getDay();
          else
            day = d.getDay();

          if ( d.getDay() < 10 )
            month = '0'+d.getMonth();
          else
            month = d.getMonth();

          this.messageInfo.push({id: data.rows.item(0).id,
            sender: data.rows.item(0).sender,
            titel: data.rows.item(0).titel,
            message: data.rows.item(0).message,
            mTime: day + '.' + month + '.' + d.getFullYear(),
            // gelesenColor: gelesenColor,
            // iconName: iconName,
            componentId: data.rows.item(0).id});

          this.database.executeSql("UPDATE nachrichten SET gelesen=1  WHERE id=?", [messageId]).then((data) => {
            console.log("Nachricht ist jetzt gelesen.");
          }, (error) => {
            console.log("Es ist eine Fehler aufgetrofen: diesen Nachricht kann nicht wie 'gelesen' markiert werden.");
          });

        }
      }, (error) => {
        // alert("6 ERROR: " + JSON.stringify(error));
      });



    }, (error) => {
      console.log("ERROR: ", error);
    });
  }

  ionViewWillEnter() {
    this.viewCtrl.showBackButton(true);
    this.viewCtrl.setBackButtonText('Eingang');
  }

}
