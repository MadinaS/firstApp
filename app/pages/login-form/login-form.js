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
require('rxjs/add/operator/map');
var loginservice_1 = require('../login-form/loginservice');
// import { ModalController } from 'ionic-angular';
// import {modalLoginPage} from "./modalLoginPage";
/*
  Generated class for the LoginFormPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var LoginFormPage = (function () {
    function LoginFormPage(nav, loginService, fb) {
        this.nav = nav;
        this.loginService = loginService;
        this.fb = fb;
        //   this.authForm = new FormBuilder().group({
        //     'username': ['', Validators.compose([Validators.required, Validators.minLength(6), CustomValidators.checkFirstCharacterValidator])],
        //     'password': ['', Validators.compose([Validators.required, Validators.minLength(3), CustomValidators.checkFirstCharacterValidator])]
        //   });
        //
        //   // http.post('https://www.facebook.com/', '123').map(res => res.json());
        //
        //   this.username = this.authForm.controls['username'];
        //   this.password = this.authForm.controls['password'];
        //
        //   if((window.localStorage.getItem('accessTocken') === "undefined" || window.localStorage.getItem('accessTocken') === null || window.localStorage.getItem('accessTocken') === 'null') ) {
        //     openModal(characterNum) {
        //       let modal = Modal.create(ModalsContentPage, characterNum);
        //       this.nav.present(modal);
        //     }
        //   }
        // }
        //
        // onSubmit(value: string): void {
        //   if(this.authForm.valid) {
        //
        //     this.loginService.loginToServer(value['username'], value['password']).subscribe(
        //         data => {
        //           //noinspection TypeScriptUnresolvedVariable
        //           var result = data.RessMess;
        //
        //           if ( result == 'success' ) {
        //             //noinspection TypeScriptUnresolvedVariable
        //             window.localStorage.setItem('accessTocken', data.accessTocken);
        //             //noinspection TypeScriptUnresolvedVariable
        //             window.localStorage.setItem('myName', data.myName);
        //             // this.pa nav.loadPage('login-form.ts', 'login-form.html');
        //             // this.constructor.e
        //             this.nav.push(HomePage);
        //           }
        //
        //           // console.log(val);
        //         },
        //         err => {
        //           console.log(err);
        //         },
        //         () => console.log('Movie Search Complete')
        //     );
        //
        //
        //
        //
        //     // var url = 'localhost/appkey/api';
        //
        //     // let headers = new Headers({ 'Content-Type': 'application/jsonp' });
        //     // let options = new RequestOptions({ headers: headers });
        //     //
        //     // var resss = Http.get('http://deviamais.formulardb.de/auth/login')
        //     //     // .map(res => res.json())
        //     //     .map(request => <string[]> request.json()[1])
        //     //     .subscribe(
        //     //     name => { value['username'] },
        //     //     () => console.log('done')
        //     // );
        //   }
    }
    LoginFormPage = __decorate([
        core_1.Component({
            templateUrl: 'build/pages/login-form/login-form.html',
            directives: [common_1.FORM_DIRECTIVES],
            providers: [loginservice_1.LoginService]
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController, loginservice_1.LoginService, common_1.FormBuilder])
    ], LoginFormPage);
    return LoginFormPage;
}());
exports.LoginFormPage = LoginFormPage;
