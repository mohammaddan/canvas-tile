import Drawer from './Drawer.js';

let canvas=document.getElementById('myCanvas');
let ctx=canvas.getContext("2d");
console.log(canvas.clientWidth,canvas.clientHeight)
let drawer=new Drawer(ctx,canvas.clientWidth,canvas.clientHeight);
let body = document.body;
let rects=[
    ['lozenge',50,50],
    ['lozenge',50,50],
    ['rect',50,100],
    ['rect',50,50],
    ['rect',50,50],
    ['rect',50,50],
    ['rect',50,50],
    ['lozenge',100,50],
    ['lozenge',100,50],
    ['lozenge',50,50],

    ['rect',100,50],
    ['lozenge',50,50],

    ['rect',50,50],
    ['lozenge',50,100],
    ['rect',50,200],
    ['rect',50,50],
    ['rect',50,50],
    ['rect',50,50],
    ['rect',50,50],
];

drawer.set_padding(2);
let stop=false;
body.addEventListener('keyup',()=>{
    if(stop) return;
    if(rects.length){
        let r=rects[0];
        rects=rects.splice(1);
        drawer.addShape(...r)
    }else{
        drawer.addArrayOfShape('lozenge',50,50,4);
        drawer.addRowOfShape('rect',100,4);
        drawer.addRowOfShape('lozenge',100,3);
        drawer.addGridOfShape('rect',50,7,2);
        drawer.addGridOfShape('rect',50,8,2,4);
        drawer.addGridOfShape('lozenge',50,8,2);
        drawer.drawAll();
        stop=true;
    }
})

// drawer.drawAll();
