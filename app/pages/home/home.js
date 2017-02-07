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
var common_1 = require('@angular/common');
var CustomValidators_1 = require('../validators/CustomValidators');
require('rxjs/add/operator/map');
var loginservice_1 = require('../login-form/loginservice');
/*
  Generated class for the HomePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var HomePage = (function () {
    function HomePage(nav, loginService, fb) {
        this.nav = nav;
        this.loginService = loginService;
        this.fb = fb;
        if ((window.localStorage.getItem('accessTocken') === "undefined" || window.localStorage.getItem('accessTocken') === null || window.localStorage.getItem('accessTocken') === 'null')) {
            var modal = ionic_angular_1.Modal.create(ModalsContentPage);
            this.nav.present(modal);
        }
    }
    HomePage = __decorate([
        core_1.Component({
            templateUrl: 'build/pages/home/home.html',
            directives: [common_1.FORM_DIRECTIVES],
            providers: [loginservice_1.LoginService]
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController, loginservice_1.LoginService, common_1.FormBuilder])
    ], HomePage);
    return HomePage;
}());
exports.HomePage = HomePage;
var ModalsContentPage = (function () {
    function ModalsContentPage(platform, params, viewCtrl, nav, loginService) {
        this.platform = platform;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.nav = nav;
        this.loginService = loginService;
        this.authForm = new common_1.FormBuilder().group({
            'username': ['', common_1.Validators.compose([common_1.Validators.required, common_1.Validators.minLength(6), CustomValidators_1.CustomValidators.checkFirstCharacterValidator])],
            'password': ['', common_1.Validators.compose([common_1.Validators.required, common_1.Validators.minLength(3), CustomValidators_1.CustomValidators.checkFirstCharacterValidator])]
        });
        this.username = this.authForm.controls['username'];
        this.password = this.authForm.controls['password'];
        this;
    }
    ModalsContentPage.prototype.onSubmit = function (value) {
        var _this = this;
        if (this.authForm.valid) {
            this.loginService.loginToServer(value['username'], value['password']).subscribe(function (data) {
                //noinspection TypeScriptUnresolvedVariable
                var result = data.RessMess;
                if (result == 'success') {
                    //noinspection TypeScriptUnresolvedVariable
                    window.localStorage.setItem('accessTocken', data.accessTocken);
                    //noinspection TypeScriptUnresolvedVariable
                    window.localStorage.setItem('myName', data.myName);
                    _this.nav.push(HomePage);
                    
                    //
                }
            }, function (err) {
                console.log(err);
            }, function () { return console.log('Movie Search Complete'); });
        }
    };
    ModalsContentPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    ModalsContentPage = __decorate([
        core_1.Component({
            templateUrl: 'build/pages/login-form/modalLoginPage.html',
            providers: [loginservice_1.LoginService]
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.Platform, ionic_angular_1.NavParams, ionic_angular_1.ViewController, ionic_angular_1.NavController, loginservice_1.LoginService])
    ], ModalsContentPage);
    return ModalsContentPage;
}());
