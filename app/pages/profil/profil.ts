import { Component } from '@angular/core';
import {NavController, ActionSheet, ViewController} from 'ionic-angular';
// import './cameraEvents';
import {Camera} from "ionic-native/dist/index";

import {myCam} from "./cameraEvents";
import {cameraActionSheet} from "../validators/activeDialogs";
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
  public actionSheetCtrl;

  constructor(private nav: NavController, public viewCtrl: ViewController) {

    this.navVariables =
    { name: window.localStorage.getItem('myName'),
      beschr: window.localStorage.getItem('beschreibung')};

    this.camera = Camera;
    this.actionSheetCtrl = ActionSheet;

  }

  ngAfterViewInit() { // THERE IT IS!!!

    if ( window.localStorage.getItem('myAvatar_' + window.localStorage.getItem('accessTocken')) === "undefined" || window.localStorage.getItem('myAvatar_' + window.localStorage.getItem('accessTocken')) === null ) {
      //
    } else {
      document.getElementById("avatarDiv").style.background = window.localStorage.getItem('myAvatar_' + window.localStorage.getItem('accessTocken'));
    }

    console.log( window.localStorage.getItem('myAvatar_' + window.localStorage.getItem('accessTocken')) );

  }


  //-----------------------------------------
  showCamera() {

    // let actionSheet = this.actionSheetCtrl.create({
    //   title: 'Modify your album',
    //   buttons: [
    //     {
    //       text: 'Destructive',
    //       role: 'destructive',
    //       handler: () => {
    //         console.log('Destructive clicked');
    //       }
    //     },
    //     {
    //       text: 'Archive',
    //       handler: () => {
    //         console.log('Archive clicked');
    //       }
    //     },
    //     {
    //       text: 'Cancel',
    //       role: 'cancel',
    //       handler: () => {
    //         console.log('Cancel clicked');
    //       }
    //     }
    //   ]
    // });




    let cameraAS = new cameraActionSheet();
    this.nav.present( cameraAS.presentActionSheet() );
    
    
    // let a = new myCam();
    // a.showCamera();
    //
    // console.log('hier2');
    
    
    
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
