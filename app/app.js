"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var ionic_angular_1 = require('ionic-angular');
var ionic_native_1 = require('ionic-native');
var hello_ionic_1 = require('./pages/hello-ionic/hello-ionic');
var list_1 = require('./pages/list/list');
var home_1 = require("./pages/home/home");
var login_form_1 = require("./pages/login-form/login-form");
var MyApp = (function () {
    function MyApp(platform, menu) {
        this.platform = platform;
        this.menu = menu;
        this.rootPage = home_1.HomePage;
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
            { title: 'Hello Ionic', component: hello_ionic_1.HelloIonicPage },
            { title: 'My First List', component: list_1.ListPage },
            { title: 'Home Page', component: home_1.HomePage },
            { title: 'Login there', component: login_form_1.LoginFormPage }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            ionic_native_1.StatusBar.styleDefault();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // close the menu when clicking a link from the menu
        this.menu.close();
        // navigate to the new page if it is not the current page
        this.nav.setRoot(page.component);
    };
    __decorate([
        core_1.ViewChild(ionic_angular_1.Nav), 
        __metadata('design:type', ionic_angular_1.Nav)
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        core_1.Component({
            templateUrl: 'build/app.html'
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.Platform, ionic_angular_1.MenuController])
    ], MyApp);
    return MyApp;
}());
ionic_angular_1.ionicBootstrap(MyApp);
