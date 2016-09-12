import { ActionSheetController } from 'ionic-angular'



export class cameraActionSheet {

    public actionSheetCtrl;

    //noinspection TypeScriptUnresolvedVariable
    constructor() {
        this.actionSheetCtrl = ActionSheetController;
    }

    presentActionSheet() {
        //noinspection TypeScriptUnresolvedFunction
        let actionSheet = this.actionSheetCtrl.create({
            title: 'Modify your album',
            buttons: [
                {
                    text: 'Destructive',
                    role: 'destructive',
                    handler: () => {
                        console.log('Destructive clicked');
                    }
                },{
                    text: 'Archive',
                    handler: () => {
                        console.log('Archive clicked');
                    }
                },{
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    }

}



