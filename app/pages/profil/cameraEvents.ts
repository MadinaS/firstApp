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
    static options = CameraOptions;

    constructor() {
    }

    static showCamera() {
        console.log('hier');
        // var options = CameraOptions();
        this.options = {
            quality: 50,
            destinationType: Camera.DestinationType.DATA_URL,
            sourceType: Camera.PictureSourceType.SAVEDPHOTOALBUM,
            allowEdit: true,
            encodingType: Camera.EncodingType.PNG,
            targetWidth: '1200px',
            targetHeight: '1600px',
            correctOrientation: true
        };

        alert('new hier');

        // Camera.getPicture(this.options).then(function(imageData) {
        //     alert('new hier');
        //     // $scope.srcImage = "data:image/jpeg;base64," + imageData;
        // }, function(err) {
        //     // error
        // });
    }
}

//-----------------------------------------
// function showCamera() {
//     console.log('hier');
//     var options = {
//         quality: 50,
//         destinationType: this.camera.DestinationType.DATA_URL,
//         sourceType: this.camera.PictureSourceType.SAVEDPHOTOALBUM,
//         allowEdit: true,
//         encodingType: this.camera.EncodingType.PNG,
//         targetWidth: '1200px',
//         targetHeight: '1600px',
//         correctOrientation: true
//     }
//     this.camera.getPicture(function cameraSuccess(imageUri) {
//
//         alert('hier222222');
//
//         // var img = new Image();
//         // img.src = imageUri;
//         //
//         // var c = document.getElementById('myCanvas');
//         // var ctx = c.getContext("2d");
//         // ctx.drawImage(img, 0, 0);
//         //
//         // var imageData = ctx.getImageData(img.x, img.y, img.width, img.height);
//         // var data = imageData.data;
//         // var data2 = imageData.data;
//         //
//         // var colorsArr = Array();
//         //
//         // var colorsDiv = document.getElementById('hierColors');
//         // for (var i = 0, n = data.length; i < n; i += 4) {
//         //
//         //     colorsArr[data[i] + '-' + data[i + 1] + '-' + data[i + 2] + '-' + data[i + 3]] = data[i] + '-' + data[i + 1] + '-' + data[i + 2] + '-' + data[i + 3];
//         //     if (data[i] > 182 || data[i + 1] > 182 || data[i + 2] > 182) {
//         //         data2[i] = 255;
//         //         data2[i + 1] = 255;
//         //         data2[i + 2] = 255;
//         //     }
//         // }
//         //
//         // imageData.data = data2;
//         // ctx.putImageData(imageData, 0, 0);
//         //
//         //
//         // var colorsDiv = document.getElementById('hierColors');
//         // var hellColors = Array();
//         // var dunklColors = Array();
//         // for (key in colorsArr) {
//         //     console.log(colorsArr[key]);
//         //
//         //     data = colorsArr[key].split('-');
//         //
//         //     var node = document.createElement("div");                 // Create a <li> node
//         //     var att = document.createAttribute("style");       // Create a "class" attribute
//         //     att.value = 'width: 10px;height: 10px;background-color:  rgb(' + data[0] + ',' + data[1] + ',' + data[2] + ')';                           // Set the value of the class attribute
//         //     node.setAttributeNode(att);
//         //     colorsDiv.appendChild(node);
//         //
//         // }
//         //
//         // console.log(colorsArr);
//
//     }, function cameraError(error) {
//         console.debug("Unable to obtain picture: " + error, "app");
//
//     }, options);
//
//
// }


// function showColors() {
//
// }

// function setOptions() {
//     var options = {
//         quality: 50,
//         destinationType: Camera.DestinationType.DATA_URL,
//         sourceType: Camera.PictureSourceType.SAVEDPHOTOALBUM,
//         allowEdit: true,
//         encodingType: Camera.EncodingType.PNG,
//         targetWidth: '1200px',
//         targetHeight: '1600px',
//         correctOrientation: true
//     }
//     return options;
// }


