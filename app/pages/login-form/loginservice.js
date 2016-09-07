"use strict";
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
    }
    Object.defineProperty(LoginService, "parameters", {
        get: function () {
            return [[http_1.Http]];
        },
        enumerable: true,
        configurable: true
    });
    LoginService.prototype.searchMovies = function (name, pass) {
        // var http = Http;
        // var url = 'http://deviamais.formulardb.de/auth/login?login=Login&username=' + name + '&password=' + pass;
        // var response = this.http.get(url).map(res => res.json());
        // return response;
        var http = http_1.Http;
        var body = JSON.stringify({ 'login': 'Login', 'password': 'dudh1234', 'username': 'admin' });
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        var options = new http_1.RequestOptions({ headers: headers });
        var url = 'http://localhost/shopware/app/index';
        var response = this.http.post(url, body, options).map(function (res) { return res.json(); });
        console.log(response);
        return response;
    };
    LoginService.prototype.loginToServer = function (name, pass) {
        // var http = Http;
        // var url = 'http://deviamais.formulardb.de/auth/login?login=Login&username=' + name + '&password=' + pass;
        // var response = this.http.get(url).map(res => res.json());
        // return response;
        var http = http_1.Http;
        var body = JSON.stringify({ 'password': 'dudh1234', 'username': 'admin' });
        var headers = new http_1.Headers({ 'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Accept' });
        var options = new http_1.RequestOptions({ headers: headers });
        var url = 'http://localhost/shopware/app/login/';
        var response = this.http.post(url, body, options).map(function (res) { return res.json(); });
        // console.log(response.["success"]);
        return response;
    };
    return LoginService;
}());
exports.LoginService = LoginService;
