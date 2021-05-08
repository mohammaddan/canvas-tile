import Shape from "./Shape.js";

export default class BaseDrawer extends Shape{
    constructor(ctx,width,height,xOffet=0,yOffset=0){
        super();
        this.ctx=ctx;
        this.width=width;
        this.height=height;
        this.shapes=[];
        this.rows=[{height:0,points:new Set([0])}];
        this.row=0;
        this.x=0;this.y=0;
        this.xOffet=xOffet;this.yOffset=yOffset;
    }

    isInTheShape(x1,y,x2){
        return this.shapes.some(s=> 
            s.x<=x2 && x1<s.x+s.width &&
            s.y<=y && s.y+s.height>y)
    }

    removeAnyPointsOnShape(shape){
        this.rows.forEach(row=>{
            for(let x of row.points){
                if((x>=shape.x && x < shape.x+shape.width && shape.y==row.height) ||
                    (x==shape.x && row.height>=shape.y && row.height<shape.y+shape.height))
                    row.points.delete(x);
            }
        })
    }

    addShape(shape, w,h,extra=null,padding=0) {
        let x=[...this.rows[0].points].sort((a, b)=>{return a-b})[0];
        let y=this.rows[0].height;
        // console.log(this.rows);
        this.rows[0].points.forEach(q=> {isNaN(q)?this.rows[0].points.delete(q):''});
        while(x+w>this.width || this.isInTheShape(x,y,x+w))
        {
            this.rows[0].points.delete(x);
            this.rows[0].points.forEach(q=> {isNaN(q)?this.rows[0].points.delete(q):''});
            if(this.rows[0].points.size===0) {
                this.rows = this.rows.splice(1);
                y=this.rows[0].height;
            }
            x=[...this.rows[0].points].sort(function(a, b){return a-b})[0];
        }
        console.log(`${shape} (${x},${y})`);
        this.rows[0].points.delete(x);
        this.rows[0].points.add(x+w);
        let nextRow= this.rows.find(r=>r.height==y+h)
        if(nextRow==null) {
            this.rows.push({height:y+h,points:new Set([0])});
            nextRow=this.rows[this.rows.length-1];
            this.rows = this.rows.sort((a,b)=> a.height-b.height)
        }
        nextRow.points.add(x);
        if(x+w<this.width) nextRow.points.add(x+w);
        this.shapes.push({
            shape:shape,
            x:x+this.xOffet,
            y:y+this.yOffset,
            width:w,
            height:h,
            extra:extra,
            padding:padding
        })
        if(this.rows[0].points.size===0) this.rows=this.rows.splice(1);
        this.removeAnyPointsOnShape(this.shapes[this.shapes.length-1]);
        if(this.rows[0].points.size===0) this.rows=this.rows.splice(1);

        // this.drawLastShapeWithAllPoint();
    }

    drawLastShapeWithAllPoint(){
        // let shape=this.shapes[this.shapes.length-1];
        // this['draw_'+shape.shape](shape);
        this.ctx.clearRect(0,0,this.width,this.height);
        this.drawAll();

        this.rows.forEach(row=>{
            for(let x of row.points){
                this.ctx.beginPath();
                this.ctx.strokeStyle='#ff0000';
                this.ctx.arc(x,row.height,3,0,2 * Math.PI);
                this.ctx.stroke();
            }
        })
        this.ctx.strokeStyle='#000000';
    }

    drawAll(){
        // this.ctx.imageSmoothingEnabled = true;
        // console.log(this.shapes);
        // this.ctx.strokeStyle='#000000aa';
        this.shapes.forEach(shape=>{
            this['draw_'+shape.shape](shape);
        })
        // this.ctx.translate(0.5, 0.5);
    }
}