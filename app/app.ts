import {Component, ViewChild} from '@angular/core';
import {ionicBootstrap, Platform, MenuController, Nav} from 'ionic-angular';
import {StatusBar, SQLite} from 'ionic-native';
import {ProfilPage} from './pages/profil/profil';
import {HomePage} from "./pages/home/home";
import {LoginFormPage} from "./pages/login-form/login-form";
import {NachrichtenPage} from "./pages/nachrichten/nachrichten";



@Component({
  templateUrl: 'build/app.html'
})
class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  pages: Array<{ title: string, component: any, icon: string, active: string}>;
  navVariables: {name: string, beschr: string};

  constructor(
    private platform: Platform,
    private menu: MenuController
  ) {
    this.initializeApp();

    // window.localStorage.setItem('accessTocken', null);
    // window.localStorage.setItem('myName', null);

    // window.localStorage.setItem('myName', 'Madina S');
    // window.localStorage.setItem('beschreibung', 'Mein klein Text hier.');
    // window.localStorage.setItem('accessTocken', null);

    // if((window.localStorage.getItem('accessTocken') === "undefined" || window.localStorage.getItem('accessTocken') === null || window.localStorage.getItem('accessTocken') === 'null') ) {
    //   this.rootPage = LoginFormPage;
    // } else {
    //   this.rootPage = HomePage;
    // }

    // this.rootPage = HomePage;

    // console.log( window.localStorage.getItem('accessTocken') );

    // set our app's pages
    this.pages = [
        { title: 'Home', component: HomePage, icon: 'home', active: 'active' },
        { title: 'Postfach', component: NachrichtenPage, icon: 'mail-outline', active: '' },
        { title: 'Einstellungen', component: ProfilPage, icon: 'settings-outline', active: '' },
      
        { title: 'Abmelden', component: HomePage, icon: 'log-out', active: '' }
    ];

    this.navVariables =
      { name: window.localStorage.getItem('myName'),
        beschr: window.localStorage.getItem('beschreibung') };
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();


      let db = new SQLite();
      db.openDatabase({
        name: "data.db",
        location: "default"
      }).then(() => {

        db.executeSql("DROP TABLE IF EXISTS nachrichten", {});


          db.executeSql("CREATE TABLE IF NOT EXISTS nachrichten (id INTEGER PRIMARY KEY AUTOINCREMENT, userID INTEGER, sender TEXT, mTime INTEGER, titel TEXT, message TEXT, gelesen TINYINT)", {}).then((data) => {
              // alert("3 TABLE CREATED");
          }, (error) => {
              // alert("4 Unable to execute sql");
          });

          db.executeSql("SELECT * FROM nachrichten", []).then((data) => {
              if ( data.rows.length == 0 ) {
                  db.executeSql("INSERT INTO nachrichten (userID, sender, mTime, titel, message, gelesen) VALUES " +
                      "('abcd1234', 'Server', 1486141836, 'Some Titel', 'Hier ist 1 ein gaanz gaaaaaaanz gaaaaaanz gaaaaaaanz gaaaaaanz gaaaaaaanz gaaaaaanz gaaaaaaanz gaaaaaanz gaaaaaaanz gaaaaaanz großess Message.', 1)," +
                      "('abcd1234', 'Administration', 1486119518, 'Some Titel', 'Hier ist 2 ein gaanz gaaaaaaanz gaaaaaanz gaaaaaaanz gaaaaaanz gaaaaaaanz gaaaaaanz gaaaaaaanz gaaaaaanz gaaaaaaanz gaaaaaanz großess Message.', 0)," +
                      "('abcd1234', 'Marion', 1486106094, 'Some Titel', 'Hier ist 3 ein gaanz gaaaaaaanz gaaaaaanz gaaaaaaanz gaaaaaanz gaaaaaaanz gaaaaaanz gaaaaaaanz gaaaaaanz gaaaaaaanz gaaaaaanz großess Message.', 0)," +
                      "('abcd1234', 'Steven', 1481453918, 'Some Titel', 'Hier ist 4 ein gaanz gaaaaaaanz gaaaaaanz gaaaaaaanz gaaaaaanz gaaaaaaanz gaaaaaanz gaaaaaaanz gaaaaaanz gaaaaaaanz gaaaaaanz großess Message.', 1)," +
                      "('abcd1234', 'Marion', 1481453918, 'Some Titel', 'Hier ist 5 ein gaanz gaaaaaaanz gaaaaaanz gaaaaaaanz gaaaaaanz gaaaaaaanz gaaaaaanz gaaaaaaanz gaaaaaanz gaaaaaaanz gaaaaaanz großess Message.', 0)," +
                      "('abcd1234', 'Mustafa', 1481453918, 'Some Titel', 'Hier ist 6 ein gaanz gaaaaaaanz gaaaaaanz gaaaaaaanz gaaaaaanz gaaaaaaanz gaaaaaanz gaaaaaaanz gaaaaaanz gaaaaaaanz gaaaaaanz großess Message.', 1)," +
                      "('abcd1234', 'Julian', 1482145118, 'Some Titel', 'Hier ist 7 ein gaanz gaaaaaaanz gaaaaaanz gaaaaaaanz gaaaaaanz gaaaaaaanz gaaaaaanz gaaaaaaanz gaaaaaanz gaaaaaaanz gaaaaaanz großess Message.', 0)," +
                      "('abcd1234', 'Server', 1482145118, 'Some Titel', 'Hier ist 8 ein gaanz gaaaaaaanz gaaaaaanz gaaaaaaanz gaaaaaanz gaaaaaaanz gaaaaaanz gaaaaaaanz gaaaaaanz gaaaaaaanz gaaaaaanz großess Message.', 0)," +
                      "('abcd1234', 'Marion', 1483441118, 'Some Titel', 'Hier ist 9 ein gaanz gaaaaaaanz gaaaaaanz gaaaaaaanz gaaaaaanz gaaaaaaanz gaaaaaanz gaaaaaaanz gaaaaaanz gaaaaaaanz gaaaaaanz großess Message.', 0)," +
                      "('abcd1234', 'Steven', 1483441118, 'Some Titel', 'Hier ist 10 ein gaanz gaaaaaaanz gaaaaaanz gaaaaaaanz gaaaaaanz gaaaaaaanz gaaaaaanz gaaaaaaanz gaaaaaanz gaaaaaaanz gaaaaaanz großess Message.', 1)," +
                      "('abcd1234', 'Julian', 1483441118, 'Some Titel', 'Hier ist 11 ein gaanz gaaaaaaanz gaaaaaanz gaaaaaaanz gaaaaaanz gaaaaaaanz gaaaaaanz gaaaaaaanz gaaaaaanz gaaaaaaanz gaaaaaanz großess Message.', 0)," +
                      "('abcd1234', 'Server', 1483441118, 'Some Titel', 'Hier ist 12 ein gaanz gaaaaaaanz gaaaaaanz gaaaaaaanz gaaaaaanz gaaaaaaanz gaaaaaanz gaaaaaaanz gaaaaaanz gaaaaaaanz gaaaaaanz großess Message.', 0)," +
                      "('abcd1234', 'Marion', 1483786718, 'Some Titel', 'Hier ist 13 ein gaanz gaaaaaaanz gaaaaaanz gaaaaaaanz gaaaaaanz gaaaaaaanz gaaaaaanz gaaaaaaanz gaaaaaanz gaaaaaaanz gaaaaaanz großess Message.', 0)," +
                      "('abcd1234', 'Steven', 1484795740, 'Some Titel', 'Hier ist 14 ein gaanz gaaaaaaanz gaaaaaanz gaaaaaaanz gaaaaaanz gaaaaaaanz gaaaaaanz gaaaaaaanz gaaaaaanz gaaaaaaanz gaaaaaanz großess Message.', 1)," +
                      "('abcd1234', 'Julian', 1484413402, 'Some Titel', 'Hier ist 15 ein gaanz gaaaaaaanz gaaaaaanz gaaaaaaanz gaaaaaanz gaaaaaaanz gaaaaaanz gaaaaaaanz gaaaaaanz gaaaaaaanz gaaaaaanz großess Message.', 0)," +
                      "('abcd1234', 'Server', 1484413402, 'Some Titel', 'Hier ist 16 ein gaanz gaaaaaaanz gaaaaaanz gaaaaaaanz gaaaaaanz gaaaaaaanz gaaaaaanz gaaaaaaanz gaaaaaanz gaaaaaaanz gaaaaaanz großess Message.', 0)," +
                      "('abcd1234', 'Madina', 1484829118, 'Some Titel', 'Hier ist 17 ein gaanz gaaaaaaanz gaaaaaanz gaaaaaaanz gaaaaaanz gaaaaaaanz gaaaaaanz gaaaaaaanz gaaaaaanz gaaaaaaanz gaaaaaanz großess Message.', 0)," +
                      "('abcd1234', 'Martin', 1486033118, 'Some Titel', 'Hier ist 18 ein gaanz gaaaaaaanz gaaaaaanz gaaaaaaanz gaaaaaanz gaaaaaaanz gaaaaaanz gaaaaaaanz gaaaaaanz gaaaaaaanz gaaaaaanz großess Message.', 0)," +
                      "('abcd1234', 'Server', 1486033118, 'Some Titel', 'Hier ist 19 ein gaanz gaaaaaaanz gaaaaaanz gaaaaaaanz gaaaaaanz gaaaaaaanz gaaaaaanz gaaaaaaanz gaaaaaanz gaaaaaaanz gaaaaaanz großess Message.', 0)"
                      , []).then((data) => {

                      // alert("1 INSERTED: " + JSON.stringify(data));
                      // alert('inserted');
                  }, (error) => {
                      // alert("2 ERROR: " + JSON.stringify(error.err));
                  });
              }
          }, (error) => {
              // alert("ERROR no insert : " + JSON.stringify(error.err));
          });


          // db.executeSql("INSERT INTO nachrichten (userID, sender, mTime, titel, message, foto) VALUES " +
          //     "('abcd1234', 'Server', 1266963258, 'Some Titel', 'Hier ist 1 ein gaanz gaaaaaaanz gaaaaaanz gaaaaaaanz gaaaaaanz gaaaaaaanz gaaaaaanz gaaaaaaanz gaaaaaanz gaaaaaaanz gaaaaaanz großess Message.', 'data:image/png;base64,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')," +
          //     "('abcd1234', 'Administration', 1276963358, 'Some Titel', 'Hier ist 2 ein gaanz gaaaaaaanz gaaaaaanz gaaaaaaanz gaaaaaanz gaaaaaaanz gaaaaaanz gaaaaaaanz gaaaaaanz gaaaaaaanz gaaaaaanz großess Message.', '')," +
          //     "('abcd1234', 'Marion', 1286963458, 'Some Titel', 'Hier ist 3 ein gaanz gaaaaaaanz gaaaaaanz gaaaaaaanz gaaaaaanz gaaaaaaanz gaaaaaanz gaaaaaaanz gaaaaaanz gaaaaaaanz gaaaaaanz großess Message.', '')," +
          //     "('abcd1234', 'Steven', 1256963658, 'Some Titel', 'Hier ist 5 ein gaanz gaaaaaaanz gaaaaaanz gaaaaaaanz gaaaaaanz gaaaaaaanz gaaaaaanz gaaaaaaanz gaaaaaanz gaaaaaaanz gaaaaaanz großess Message.', 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0OTZFRkExNTJENTdFMzExOTU5NzlENUM1NDY5MkEyNyIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowMjEyQzgwQkE5MDIxMUUzQkEzNUI1NEY0NDEwQTg0OSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowMjEyQzgwQUE5MDIxMUUzQkEzNUI1NEY0NDEwQTg0OSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M2IChXaW5kb3dzKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjFDMUQwQUJFRkRBOEUzMTE5RDJCRjFDQTYwMDI4RjA4IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjQ5NkVGQTE1MkQ1N0UzMTE5NTk3OUQ1QzU0NjkyQTI3Ii8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+uP9DgQAABWpJREFUeNrMWGlsVFUUPu/Nm5nO0qEbpHaKim2lLaJADWohGhVjKkalRjTRmKgsiQZQjImJpMYIhvBLDZFoEFyqiYqVhAQxkgZSRVQsTZO2doFKKm1p6ULbmXa2N55ze187U942fY3pSb7Mndzlfffes9xzhL11YEU8iGJEASIDkYkYRowgOhCtvD1rkWYxh8g8i6hA3GmwRgzRgDiBqEb8nerHxBTGrkEcR7Qj3kHcbWKDNkQZ4i1EC6IW8eBcE8xDfIP4hZ+aYOHG7kecRBxDLJkLgusRjYiNScciOEwz0hj7KL/6p6wQfJXvNHtmh895I+T71hiS8/vKwZd2k1a3D/EtV5eUjWQX4l2tScMTF2GhZzlIYhrE4hHIcC4Bt2MR6wuG+2A41AmiIIHHngvdI2eN9lHFyb5mluAWPXIkcZAZyUeKDkOOuxSy3MVTVxmLh2Ew2ApXg03w++V9bKwJodvqQeyb2SHM8IOrEL8hdJWsKPsJeKhgP6Q7/LpfHQt3w88XtkHbQI0ZkuSS1iFOaemgE/G1EbninI1QWVLDyIVjY5rjIrEAeB15sKHkeyhZ+Iwpe+K+0qtFcCdiqd4KGWm3QEXRp8zT1HbuhOrGcs2x1Y1r4eTFHaxdUXgQMtMKzZCkK3k7ifW6F9nvAsR3iDS92ffe/B5a7yQph+SDRe7b0VhuUx3rsmeBPx2t2LkYbKIDDcoFHYPHzJBciThEGpJ4glt5LNUUu80DRVmPT281/R7dqyNV8PumT7gw+zFw2LxmCLoQ22de8WajWV77DeC25zAbng3cUg7qpN+sf3+e6yRzM8tpg6qkUMntohuGJjqYRZJeWZHR8L9clwsgKo+zNXXCK33stKQVvPN9a6Gy9Cg4RC/82LEZukfPot87ZIngDy1PQq63jBlaVA5CTUsldF07rTX8AYXgXWq9K3K3gEuajHJledtg6EI7OuVllgi6pCxcazuLQAT6hg7B1YoOFqs6JdGZEPDtGLpsYFUEXIPWml7XqTe8RCHoVw9n8el2XIa5kuTQF9cbmq8QTIf5KXRlLjHFV/X/LSKRG52n5Oj+AyJ/5sxH6VZ0sF3V4hJuXhDmTgtSWLdNIXhOrTccG0l4OgUhJoctk6PHbEQOTP0PRXVT5j8VgrVqvee6P4TB8VYIhHvhTNdutrhVkTE9ONO1B0NcD67dht/4QG/4KSUW/4HoQixO7O0PNMLh8yuZww5Fh5NeJrMVu+iBzqGf4GB9KcgynWZQa+iQcnB0guQ5v1QbRQGdyCltq6KsQWvqkAOeh4cSH6yU9b9Mm9SaMR4ZwPecB5zSAhiPDmBczZxS8lD0GkuigpF+ljxRnFWiBqlJMNIHzf1fQVNftZkkinKT5xCDiVkduZpPEDv09Ke283UQOt8AyeaCTauaWX5M0jpwBE50bGXthwsOwB25k89L0t8vGlaz/MRkdgf8NtvVcpIqMz6RPiTLkaQ4SrE6Ho9NIoEIxXPaWArkSJ/e1EqayOY3GUVwdf8laLST/Z4JeQVxRa/0QdWrPanWnRIJJzliaguma037edprWJuhq/5c3+FG2ItYkYnoUEJ7MMlqTTr4o7y6YKp4RFf8EuIjTT1EXau7VIU5xmW4MlYP53sOTPU19H4MvWN/sb66S7uYDhoIndrT3HrBqPShVjPZy6sO14nDls5OSY5Hk3ctSCzZCsVGjNwJVbZ26+m9kQa/jyjXjtej15GbdElRI3JNiPt4kSputcJazxOrF5QXhgX5h1vqCsSvc1UCBh4OP+OJzHquN1dNziULOoLYgLiV63bU7I5SrfLL3BUd5w5vGcdSntv4+At9jJ92My8hzzrr+k+AAQCRcNga8NWj4AAAAABJRU5ErkJggg==')," +
          //     "('abcd1234', 'Julian', 1246963758, 'Some Titel', 'Hier ist 6 ein gaanz gaaaaaaanz gaaaaaanz gaaaaaaanz gaaaaaanz gaaaaaaanz gaaaaaanz gaaaaaaanz gaaaaaanz gaaaaaaanz gaaaaaanz großess Message.', '')," +
          //     "('abcd1234', 'Server', 1236963858, 'Some Titel', 'Hier ist 7 ein gaanz gaaaaaaanz gaaaaaanz gaaaaaaanz gaaaaaanz gaaaaaaanz gaaaaaanz gaaaaaaanz gaaaaaanz gaaaaaaanz gaaaaaanz großess Message.', 'data:image/png;base64,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')," +
          //     "('abcd1234', 'Server', 1296963658, 'Some Titel', 'Hier ist 4 ein gaanz gaaaaaaanz gaaaaaanz gaaaaaaanz gaaaaaanz gaaaaaaanz gaaaaaanz gaaaaaaanz gaaaaaanz gaaaaaaanz gaaaaaanz großess Message.', 'data:image/png;base64,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')"




      }, (error) => {
        console.log("Unable to open database");
      });
    });
  }

  openPage(page) {
      this.pages = [
          { title: 'Home', component: HomePage, icon: 'home', active: (page.title === 'Home') ? "active" : "" },
          { title: 'Postfach', component: NachrichtenPage, icon: 'mail-outline', active: (page.title === 'Postfach') ? "active" : "" },
          { title: 'Einstellungen', component: ProfilPage, icon: 'settings-outline', active: (page.title === 'Einstellungen') ? "active" : "" },

          { title: 'Abmelden', component: HomePage, icon: 'log-out', active: '' }
      ];
    // close the menu when clicking a link from the menu
      this.menu.toggle();
      //this.menu.close();

    if ( page.title == 'Abmelden' ) {
      window.localStorage.setItem('accessTocken', null);
      window.localStorage.setItem('myName', null);
    }
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);



  }



  // ionViewWillEnter() { // THERE IT IS!!!
  //
  //   if ( window.localStorage.getItem('myAvatar') === "undefined" || window.localStorage.getItem('myAvatar') === null ) {
  //     //
  //   } else {
  //     document.getElementById("menu_avatarDiv").style.background = window.localStorage.getItem('myAvatar');
  //   }
  //
  //   alert( 'menu' );
  //
  // }

  ngAfterViewInit() { // THERE IT IS!!!

    if ( window.localStorage.getItem('myAvatar_' + window.localStorage.getItem('accessTocken')) === "undefined" || window.localStorage.getItem('myAvatar_' + window.localStorage.getItem('accessTocken')) === null ) {
      //
    } else {
      document.getElementById("menu_avatarDiv").style.background = window.localStorage.getItem('myAvatar_' + window.localStorage.getItem('accessTocken'));
    }

    // console.log( window.localStorage.getItem('myAvatar') );

  }


}

ionicBootstrap(MyApp);
