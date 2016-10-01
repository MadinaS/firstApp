import { Component } from '@angular/core';
import {NavController, MenuController} from 'ionic-angular';
import {SQLite} from "ionic-native/dist/index";
import {NachrichtPage} from "../nachricht/nachricht";


/*
  Generated class for the NachrichtenPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/nachrichten/nachrichten.html',
})
export class NachrichtenPage {

  pages: Array<{title: string, component: any, icon: string}>;
  public database: SQLite;
  public people: Array<Object>;
  trololo: string;


  constructor(private nav: NavController, private menu: MenuController) {
    this.trololo = "url('data:image/png;base64,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') no-repeat left top";
    this.database = new SQLite();
    this.database.openDatabase({name: "data.db", location: "default"}).then(() => {
      this.refresh();
    }, (error) => {
      console.log("ERROR: ", error);
    });

    // this.pages = [
    //   { title: 'Home', component: '', icon: 'home' },
    //   { title: 'Hello Ionic', component: '', icon: 'heart-outline' },
    //   { title: 'Einstellungen', component: '', icon: 'settings-outline' },
    //   { title: 'Nachrichten', component: '', icon: 'settings-outline' },
    //   { title: 'Abmelden', component: '', icon: 'log-out' }
    // ];

  }

  openPage(people) {
    // close the menu when clicking a link from the menu
    this.menu.close();

    // if ( people.title == 'Abmelden' ) {
    //   window.localStorage.setItem('accessTocken', null);
    //   window.localStorage.setItem('myName', null);
    // }
    // navigate to the new page if it is not the current page
    this.nav.setRoot(NachrichtPage, {
          id: people
        });
  }

  public refresh() {
    this.trololo = 'red';
    this.database.executeSql("SELECT * FROM nachrichten", []).then((data) => {
      this.people = [];
      if(data.rows.length > 0) {
        let avatarStyle = '';
        let avatarName = '';
        for(var i = 0; i < data.rows.length; i++) {
          let d = new Date(data.rows.item(i).mTime*1000);
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

          if ( data.rows.item(i).foto !== '' ) {
            avatarStyle = "url('" + data.rows.item(i).foto + "') no-repeat left top";
            avatarName = '';
          } else {
            avatarStyle = '';
            avatarName = 'ios-person';
          }


          this.people.push({sender: data.rows.item(i).sender,
                            titel: data.rows.item(i).titel.substring(0, 20) + '...',
                            message: data.rows.item(i).message.substring(0, 30) + '...',
                            mTime: day + '.' + month + '.' + d.getFullYear(),
                            avatarStyle: avatarStyle,
                            avatarName: avatarName,
                            componentId: data.rows.item(i).id});
        }
      }
    }, (error) => {
      console.log("ERROR: " + JSON.stringify(error));
    });
  }

}
