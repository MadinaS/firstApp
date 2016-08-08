import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {FORM_DIRECTIVES, FormBuilder, ControlGroup, Validators, AbstractControl} from '@angular/common';
import {CustomValidators} from '../validators/CustomValidators';
//noinspection TypeScriptCheckImport
import {Http, Response, Headers, RequestOptions, Request, RequestMethod} from '@angular/http';
import 'rxjs/add/operator/map';
import {bootstrap} from '@angular/platform-browser-dynamic';


/*
  Generated class for the LoginFormPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/login-form/login-form.html',
  directives: [FORM_DIRECTIVES]
})
export class LoginFormPage {

  authForm: ControlGroup;
  username: AbstractControl;
  password: AbstractControl;

  static get parameters() {
    return [[Http]];
  }



  constructor(private nav: NavController, private http: Http, private fb: FormBuilder) {
    this.authForm = new FormBuilder().group({
      'username': ['', Validators.compose([Validators.required, Validators.minLength(6), CustomValidators.checkFirstCharacterValidator])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(3), CustomValidators.checkFirstCharacterValidator])]
    });

    // http.post('https://www.facebook.com/', '123').map(res => res.json());

    this.username = this.authForm.controls['username'];
    this.password = this.authForm.controls['password'];
  }

  onSubmit(value: string): void {
    if(this.authForm.valid) {
      var http = Http;
      // var url = 'localhost/appkey/api';

      let headers = new Headers({ 'Content-Type': 'application/jsonp' });
      let options = new RequestOptions({ headers: headers });

      var resss = Http.get('http://deviamais.formulardb.de/auth/login')
          // .map(res => res.json())
          .map(request => <string[]> request.json()[1])
          .subscribe(
          name => { value['username'] },
          () => console.log('done')
      );

// var http = Http;
//
//       let body = JSON.stringify({ 'login': 'Login', 'password': 'dudh1234', 'username': 'admin' });
//       let headers = new Headers({ 'Content-Type': 'text/html' });
//       let options = new RequestOptions({ headers: headers });
//
//       var resss = this.http.post('http://deviamais.formulardb.de/auth/login', body, options)
//           .map(res => res);

      // console.log(resss);



      // var options = new RequestOptions({
      //   method: RequestMethod.Post,
      //   url: 'https://google.com'
      // });
      // var req = new Request(options);



      // var arg = new RequestOptions ({
      //   method: RequestMethod.Post,
      // });

      // //noinspection TypeScriptUnresolvedFunction
      // this.jsonp.request('http://deviamais.formulardb.de/auth/login').map(res => {
      //   var people = res.json();
      //   console.log(people);
      // });






      // Http.post('http://localhost/appkey/api').then(function (res) {
      //   startGenerateKey(res.data);
      // });

      console.log('Submitted value: ', value['username']);
      // return response;

    }
  }
}

