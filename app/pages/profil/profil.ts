import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import './cameraEvents';
import {Camera} from "ionic-native/dist/index";

import {myCam} from "./cameraEvents";
// import {ThreeDeeTouch} from "ionic-native/dist/index";

/*
  Generated class for the ProfilPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/profil/profil.html',
})
export class ProfilPage {

  navVariables: {name: string, beschr: string};
  public threeDeeTouch;
  public camera;

  constructor(private nav: NavController) {
    this.navVariables =
    { name: window.localStorage.getItem('myName'),
      beschr: window.localStorage.getItem('beschreibung') };

    this.camera = Camera;

  }

  askAction() {



  }


  //-----------------------------------------
  showCamera() {
    myCam.showCamera();

  console.log('hier2');
  // var options = this.setOptions();
  // //   // var camera = Camera;
  // //   this.camera.getPicture(function cameraSuccess(imageUri) {
  // //
  // //     console.log('hier2222');
  // //
  // //
  // //   console.log();
  // //
  // // }, function cameraError(error) {
  // //   console.debug("Unable to obtain picture: " + error, "app");
  // //
  // // }, options);
  //
  //   this.camera.getPicture(options).then(function() {
  //     var image = document.getElementById('myImage');
  //     console.log('hier2222');
  //     // image.src = "data:image/jpeg;base64," + imageData;
  //   }, function(err) {
  //     // error
  //   });


}

// setOptions() {
//   var options = {
//     quality: 50,
//     destinationType: Camera.DestinationType.DATA_URL,
//     sourceType: Camera.PictureSourceType.CAMERA,
//     allowEdit: true,
//     encodingType: Camera.EncodingType.PNG,
//     targetWidth: '1200px',
//     targetHeight: '1600px',
//     correctOrientation: true
//   }
//   return options;
// }



}
