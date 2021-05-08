import Base from './Base.js'

export default class extends Base{
    parameters(){
        return [
            {name:'edge',image:'',title:'طول ضلع',minVal:'',maxVal:'',minAlert:'',maxAlert:''},
        ]
    }

    details(){
        return [
            {blueprint:'',params:[]}
        ]
    }

    draw(numInWidth,numInHeight){
        let h1=this.width/numInWidth;
        let h2=(this.height-2*h1)/2;
        this.drawer.addRowOfShape('lozenge',h1,numInWidth);
        this.drawer.addRowOfShape('spear',h2,numInWidth);
        this.drawer.addRowOfShape('spear',h2,numInWidth);
        this.drawer.addRowOfShape('lozenge',h1,numInWidth);
        this.drawer.drawAll();
    }
}