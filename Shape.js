export default class Shape{
    constructor(){
        this.padding=0;
        this.lineWidth=1.6;
    }

    set_line_width(size){
        this.lineWidth=size
    }

    set_padding(padding){
        this.padding=padding;
    }

    draw_rect(shape){
        this.ctx.lineWidth=this.lineWidth;
        this.ctx.strokeRect(
            shape.x + shape.padding + this.padding,
            shape.y + shape.padding + this.padding,
            shape.width - 2 * (shape.padding + this.padding),
            shape.height - 2 * (shape.padding + this.padding)
            );
    }

    draw_lozenge(shape){
        this.ctx.beginPath();
        this.ctx.lineWidth=this.lineWidth;
        this.ctx.moveTo(shape.x, shape.y+shape.height/2);
        this.ctx.lineTo(shape.x+shape.width/2, shape.y)
        this.ctx.lineTo(shape.x+shape.width, shape.y+shape.height/2)
        this.ctx.lineTo(shape.x+shape.width/2, shape.y+shape.height)
        this.ctx.closePath();
        this.ctx.stroke();
    }

    draw_spear(shape){
        this.ctx.beginPath();
        this.ctx.lineWidth=this.lineWidth;
        let midX=shape.x+shape.width/2;
        let y1=shape.y+shape.width/2;
        let y2=shape.y+shape.height - shape.width/2;
        this.ctx.moveTo(midX,shape.y);
        this.ctx.lineTo(shape.x+shape.width,y1);
        this.ctx.lineTo(shape.x+shape.width,y2);
        this.ctx.lineTo(midX,shape.y+shape.height);
        this.ctx.lineTo(shape.x,y2);
        this.ctx.lineTo(shape.x,y1);
        this.ctx.closePath();
        this.ctx.stroke();
    }
}