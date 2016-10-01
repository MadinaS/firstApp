// document.addEventListener("deviceready", onDeviceReady, false);
//
//
// function onDeviceReady() {
//     console.log('===');
//     // console.log(navigator.camera);
//     console.log('===');
// };
import {Camera, CameraOptions} from "ionic-native/dist/index";


export class myCam {
    public optionsAufnehmen;
    public optionsAuswaehlen;

    constructor() {
        this.optionsAufnehmen = {
            quality: 50,
            destinationType: Camera.DestinationType.FILE_URI,
            sourceType: Camera.PictureSourceType.CAMERA,
            allowEdit: true,
            // encodingType: Camera.EncodingType.JPEG,
            targetWidth: '120px',
            targetHeight: '120px',
            correctOrientation: true
        };

        this.optionsAuswaehlen = {
            // quality: 50,
            destinationType: Camera.DestinationType.FILE_URI,
            sourceType: Camera.PictureSourceType.SAVEDPHOTOALBUM,
            allowEdit: true,
            // encodingType: Camera.EncodingType.JPEG,
            targetWidth: '120px',
            targetHeight: '120px',
            correctOrientation: true
        };
    }

    showCamera() {
        Camera.getPicture(this.optionsAufnehmen).then(function(imageData) {
            
            window.localStorage.setItem('myAvatar_' + window.localStorage.getItem('accessTocken'), "url('" + imageData + "') no-repeat");
            document.getElementById("avatarDiv").style.background = window.localStorage.getItem('myAvatar_' + window.localStorage.getItem('accessTocken'));
            document.getElementById("menu_avatarDiv").style.background = window.localStorage.getItem('myAvatar_' + window.localStorage.getItem('accessTocken'));

        }, function(err) {
            // error
        });
    }

    showAlbum() {
        Camera.getPicture(this.optionsAuswaehlen).then(function(imageData) {

            window.localStorage.setItem('myAvatar_' + window.localStorage.getItem('accessTocken'), "url('" + imageData + "') no-repeat");
            document.getElementById("avatarDiv").style.background = window.localStorage.getItem('myAvatar_' + window.localStorage.getItem('accessTocken'));
            document.getElementById("menu_avatarDiv").style.background = window.localStorage.getItem('myAvatar_' + window.localStorage.getItem('accessTocken'));

        }, function(err) {
            // error
        });
    }
}


