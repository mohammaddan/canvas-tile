export default class Shape{

    set_padding(padding){
        this.padding=padding;
    }

    draw_rect(shape){
        this.ctx.strokeRect(
            shape.x + shape.padding + this.padding,
            shape.y + shape.padding + this.padding,
            shape.width - 2 * (shape.padding + this.padding),
            shape.height - 2 * (shape.padding + this.padding)
            );
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