import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

export class LoginService {
  static get parameters() {
    return [[Http]];
  }

  constructor(private http:Http) {

  }

  searchMovies(name, pass) {
    // var http = Http;
    // var url = 'http://deviamais.formulardb.de/auth/login?login=Login&username=' + name + '&password=' + pass;
    // var response = this.http.get(url).map(res => res.json());
    // return response;


    var http = Http;

      let body = JSON.stringify({ 'login': 'Login', 'password': 'dudh1234', 'username': 'admin' });
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });

    var url = 'http://localhost/shopware/app/index';
    var response = this.http.post(url, body, options).map(res => res.json());
    console.log(response);
    return response;
  }

  loginToServer(name, pass) {
    // var http = Http;
    // var url = 'http://deviamais.formulardb.de/auth/login?login=Login&username=' + name + '&password=' + pass;
    // var response = this.http.get(url).map(res => res.json());
    // return response;


    var http = Http;

    let body = JSON.stringify({ 'password': 'dudh1234', 'username': 'admin' });
    let headers = new Headers({ 'Content-Type': 'application/json',
                      'Access-Control-Allow-Origin': '*',
                      'Access-Control-Allow-Headers': 'Accept'});
    let options = new RequestOptions({ headers: headers });

    var url = 'http://localhost/shopware/app/login/';
    var response = this.http.post(url, body, options).map(res => res.json());
    // console.log(response.["success"]);
    return response;
  }


//   registerMe(name, pass) {
//     var details = {
//       'email': 'email@example.com',
//       'password': 'secret'
//     }
//
// // optionally pass a username
// // details.username = 'ionitron';
//
//
//
//     Ionic.Auth.signup(details).then(signupSuccess, signupFailure);
//   }



}