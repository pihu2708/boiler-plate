class Ball{
    constructor(x,y,r){
        var property = {
            restitution : 1
        }
        this.body = Bodies.circle (x,y,r,property)
        World.add(world,this.body)
        this.r= r
        
    }
    display(){
        ellipseMode (RADIUS)
        ellipse (this.body.position.x,this.body.position.y,this.r)
    }
}