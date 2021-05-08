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
        this.drawer.addGridOfShape('lozenge',this.height/numInHeight,numInWidth,numInHeight+this.moreInHeight);
        this.drawer.drawAll();
    }
}