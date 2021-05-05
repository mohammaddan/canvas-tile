import BaseDrawer from "./BaseDrawer.js";

export default class Drawer extends BaseDrawer{
    addRowOfShape(shapeName,height,numberOfShapes){
        let width = Math.floor(this.width / numberOfShapes);
        for(let i=0;i<numberOfShapes;i++){
            this.addShape(shapeName,width,height);
        }
    }
}