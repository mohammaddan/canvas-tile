export default class Shape{

    draw_rect(shape){
        this.ctx.strokeRect(shape.x,shape.y,shape.width,shape.height);
    }

    draw_lozenge(shape){
        this.ctx.beginPath();
        this.ctx.lineWidth=1;
        this.ctx.moveTo(shape.x, shape.y+shape.height/2);
        this.ctx.lineTo(shape.x+shape.width/2, shape.y)
        this.ctx.lineTo(shape.x+shape.width, shape.y+shape.height/2)
        this.ctx.lineTo(shape.x+shape.width/2, shape.y+shape.height)
        this.ctx.closePath();
        this.ctx.stroke();
    }
}