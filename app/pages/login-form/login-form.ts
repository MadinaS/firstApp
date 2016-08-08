import { Component } from '@angular/core';
import { NavController, Modal, Platform, NavParams, ViewController } from 'ionic-angular';
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Validators, AbstractControl} from '@angular/common';
import {CustomValidators} from '../validators/CustomValidators';
import 'rxjs/add/operator/map';
import {LoginService} from '../login-form/loginservice';
import {HomePage} from "../home/home";
// import { ModalController } from 'ionic-angular';

// import {modalLoginPage} from "./modalLoginPage";


/*
  Generated class for the LoginFormPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/login-form/login-form.html',
  directives: [FORM_DIRECTIVES],
  providers: [LoginService]
})
export class LoginFormPage {

  authForm: ControlGroup;
  username: AbstractControl;
  password: AbstractControl;


  constructor(private nav: NavController, public loginService: LoginService, private fb: FormBuilder) {
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
}

