import Drawer from './Drawer.js';

let ctx=document.getElementById('myCanvas').getContext("2d");

let drawer=new Drawer(ctx,400,600);
let body = document.body;
let rects=[
    // ['lozenge',100,100],
    // ['lozenge',100,100],
    // ['rect',100,200],
    ['rect',100,100],
    ['rect',100,100],
    ['rect',100,100],
    ['rect',100,100],
    ['lozenge',133,100],
    ['lozenge',133,100],
    ['lozenge',133,100],

    ['rect',200,100],
    ['lozenge',100,100],

    ['rect',100,100],
    ['lozenge',100,200],
    ['rect',100,200],
    ['rect',100,100],
];

// drawer.addRowOfShape('rect',100,5);
// drawer.addRowOfShape('lozenge',100,3);
// drawer.addRowOfShape('lozenge',100,3);
// drawer.addRowOfShape('rect',100,5);


body.addEventListener('keyup',()=>{
    if(rects.length){
        let r=rects[0];
        rects=rects.splice(1);
        drawer.addShape(...r)
    }
})

drawer.drawAll();
