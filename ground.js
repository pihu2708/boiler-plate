class Ground{
    constructor(x,y,w,h){
        var property = {
            isStatic: true
        }
        this.body = Bodies.rectangle (x,y,w,h,property)
        World.add(world,this.body)
        this.w= w
        this.h= h
    }
    display(){
        rectMode (CENTER)
        rect (this.body.position.x,this.body.position.y,this.w,this.h)
    }
}