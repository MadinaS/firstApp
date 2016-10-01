import {ActionSheet, ActionSheetOptions} from 'ionic-angular'
import {myCam} from "../profil/cameraEvents";



export class cameraActionSheet {

    public actionSheetCtrl;

    //noinspection TypeScriptUnresolvedVariable
    constructor() {
        this.actionSheetCtrl = ActionSheet;
    }

    presentActionSheet() {
        let cameraObj = new myCam();

        let actionSheet = this.actionSheetCtrl.create({
            title: 'Foto ändern',
            buttons: [
                {
                    text: 'Foto aufnehmen',
                    // role: 'destructive',
                    handler: () => {
                        cameraObj.showCamera();
                    }
                },
                {
                    text: 'Foto auswählen',
                    handler: () => {
                        cameraObj.showAlbum();
                    }
                },
                {
                    text: 'Foto löschen',
                    role: 'destructive',
                    handler: () => {
                        // cameraObj.showAlbum();
                    }
                },
                {
                    text: 'Abbrechen',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });

        return actionSheet;
    }


}



