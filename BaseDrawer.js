import Shape from "./Shape.js";

export default class BaseDrawer extends Shape{
    constructor(ctx,width,height){
        super();
        this.ctx=ctx;
        this.width=width;
        this.height=height;
        this.shapes=[];
        this.rows=[{height:0,points:new Set([0])}];
        this.row=0;
        this.x=0;this.y=0;
    }

    isInTheShape(x,y){
        return this.shapes.some(s=> 
            s.x<=x &&
            s.x+s.width>x &&
            s.y<=y &&
            s.y+s.height>y)
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

    addShape(shape, w,h) {
        let x=[...this.rows[0].points].sort(function(a, b){return a-b})[0];
        let y=this.rows[0].height;
        // console.log(this.rows);
        this.rows[0].points.forEach(q=> {isNaN(q)?this.rows[0].points.delete(q):''});
        while(x+w>this.width || this.isInTheShape(x+w,y))
        {
            this.rows[0].points.delete(x);
            this.rows[0].points.forEach(q=> {isNaN(q)?this.rows[0].points.delete(q):''});
            if(this.rows[0].points.size===0) {
                this.rows = this.rows.splice(1);
                y=this.rows[0].height;
            }
            x=[...this.rows[0].points].sort(function(a, b){return a-b})[0];
        }
        console.log('x = ',x);
        this.rows[0].points.delete(x);
        this.rows[0].points.add(x+w);
        // if(x+w<this.width && !this.isInTheShape(x+w,y)) 
        let nextRow= this.rows.find(r=>r.height==y+h)
        if(nextRow==null) {
            this.rows.push({height:y+h,points:new Set([0])});
            nextRow=this.rows[this.rows.length-1];
        }
        if(!this.isInTheShape(x,y+h)) nextRow.points.add(x);
        if(x+w<this.width && !this.isInTheShape(x+w,y+h)) nextRow.points.add(x+w);
        this.shapes.push({
            shape:shape,
            x:x,
            y:y,
            width:w,
            height:h,
        })
        if(this.rows[0].points.size===0) this.rows=this.rows.splice(1);
        this.removeAnyPointsOnShape(this.shapes[this.shapes.length-1]);
        if(this.rows[0].points.size===0) this.rows=this.rows.splice(1);

        this.drawLastShapeWithAllPoint();
    }

    drawLastShapeWithAllPoint(){
        let shape=this.shapes[this.shapes.length-1];
        this['draw_'+shape.shape](shape);
        this.ctx.clearRect(450,0,550,550)
        this.rows.forEach(row=>{
            for(let x of row.points){
                this.ctx.beginPath();
                this.ctx.arc(x+500,row.height,3,0,2 * Math.PI);
                this.ctx.stroke();
            }
        })
    }

    drawAll(){
        console.log(this.shapes);
        this.shapes.forEach(shape=>{
            this['draw_'+shape.shape](shape);
        })
    }
}