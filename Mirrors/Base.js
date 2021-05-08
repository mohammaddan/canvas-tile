import Drawer from '../Drawer.js';

export default class Mirrors{
    constructor(ctx,width,height,xOffset=0,yOffset=0){
        this.drawer=new Drawer(ctx,width,height,xOffset,yOffset);
        this.width=width;
        this.height=height;
        this.moreInHeight=yOffset<0?1:0;
        ctx.fillStyle='#ddd'
        ctx.fillRect(0,0,width,height);
    }

    // lozenge(numInWidth,numInHeight){
    //     this.drawer.addGridOfShape('lozenge',this.height/numInHeight,numInWidth,numInHeight+this.moreInHeight);
    //     this.drawer.drawAll();
    // }

    // spear(numInWidth,numInHeight){
    //     let h1=this.width/numInWidth;
    //     let h2=(this.height-2*h1)/2;
    //     this.drawer.addRowOfShape('lozenge',h1,numInWidth);
    //     this.drawer.addRowOfShape('spear',h2,numInWidth);
    //     this.drawer.addRowOfShape('spear',h2,numInWidth);
    //     this.drawer.addRowOfShape('lozenge',h1,numInWidth);
    //     this.drawer.drawAll();
    // }
}