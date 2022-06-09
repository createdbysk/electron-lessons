const { contextBridge }=require('electron');
const path = require( 'path' );

let openDialog = null;

contextBridge.exposeInMainWorld(
    "api", {
        loadscript(filename){
            const renderer = require(path.join(__dirname, filename));
            openDialog = renderer.openDialog;
        },
        openTheDialog(){
            openDialog();
        },
    }
);