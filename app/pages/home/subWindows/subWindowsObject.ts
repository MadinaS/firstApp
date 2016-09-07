/**
 * Created by mslobodianyk on 25.08.2016.
 */
// import { Component } from '@angular/core';
//
// @Component({
//     // templateUrl: 'build/pages/login-form/login-form.html',
//     // directives: [FORM_DIRECTIVES],
//     // providers: [LoginService]
// })

class subWindowsObject {
    constructor() {

    }

    getNoLoginLook () {
        return  '<h2>Sie sind nicht eingeloggt.</h2>' +
                '<div class="myButton">Login</div>';
    }
}