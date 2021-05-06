import BaseDrawer from "./BaseDrawer.js";

export default class Drawer extends BaseDrawer{
    addRowOfShape(shapeName,height,cols,padding=0){
        let width = Math.floor(this.width / cols);
        for(let i=0;i<cols;i++){
            this.addShape(shapeName,width,height,padding);
        }
    }
    addArrayOfShape(shapeName,width,height,numberOfShapes,padding=0){
        for(let i=0;i<numberOfShapes;i++){
            this.addShape(shapeName,width,height,padding);
        }
    }
    addGridOfShape(shapeName,height,cols,rows,padding=0){
        let width = Math.floor(this.width / cols);
        for(let i=0;i<cols*rows;i++){
            this.addShape(shapeName,width,height,padding);
        }

    }
}