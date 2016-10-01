import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

export class LoginService {
  static get parameters() {
    return [[Http]];
  }

  constructor(private http:Http) {

  }

  searchMovies(name, pass) {

    var http = Http;

      let body = JSON.stringify({ 'login': 'Login', 'password': 'dudh1234', 'username': 'admin' });
      let headers = new Headers({ 'Content-Type': 'application/json' });
      let options = new RequestOptions({ headers: headers });

    var url = 'http://localhost/shopware/app/index';
    var response = this.http.post(url, body, options).map(res => res.json());
    console.log(response);
    return response;
  }

  loginToServer(vorname, nachname, appkey) {

    var http = Http;
    var url = 'https://helpdesk.npo-applications.de/kitaplusapp/benutzer/appkey/' + appkey + '/vorname/' + vorname + '/nachname/' + nachname;
    var response = this.http.get(url).map(res => res.json());

    return response;

  }


}




//------------------------------------------------- POST REQUESTS ------------------------------------------------------

// var http = Http;
//
// let body = JSON.stringify({ 'password': 'dudh1234', 'username': 'admin' });
// let headers = new Headers({ 'Content-Type': 'application/json',
//                   'Access-Control-Allow-Origin': '*',
//                   'Access-Control-Allow-Headers': 'Accept'});
// let options = new RequestOptions({ headers: headers });
//
// var url = 'http://localhost/shopware/app/login/';
// var response = this.http.post(url, body, options).map(res => res.json());
// // console.log(response.["success"]);
// return response;

//
// var url = 'https://helpdesk.npo-applications.de/kitaplusapp/benutzer/appkey/:appkey/vorname/:vorname/nachname/:nachname';
// var response = this.http.post(url, body, options).map(res => res.json());
// // console.log(response.["success"]);
// return response;