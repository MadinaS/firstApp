import {Component, ViewChild} from '@angular/core';
import {ionicBootstrap, Platform, MenuController, Nav} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HelloIonicPage} from './pages/hello-ionic/hello-ionic';
import {ListPage} from './pages/list/list';
import {HomePage} from "./pages/home/home";
import {LoginFormPage} from "./pages/login-form/login-form";


@Component({
  templateUrl: 'build/app.html'
})
class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;
  pages: Array<{title: string, component: any}>;

  constructor(
    private platform: Platform,
    private menu: MenuController
  ) {
    this.initializeApp();

    window.localStorage.setItem('accessTocken', null);

    // if((window.localStorage.getItem('accessTocken') === "undefined" || window.localStorage.getItem('accessTocken') === null || window.localStorage.getItem('accessTocken') === 'null') ) {
    //   this.rootPage = LoginFormPage;
    // } else {
    //   this.rootPage = HomePage;
    // }

    // this.rootPage = HomePage;

    // console.log( window.localStorage.getItem('accessTocken') );

    // set our app's pages
    this.pages = [
      { title: 'Hello Ionic', component: HelloIonicPage },
      { title: 'My First List', component: ListPage },
      { title: 'Home Page', component: HomePage },
      { title: 'Login there', component: LoginFormPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }


}

ionicBootstrap(MyApp);
