class Paper{
    constructor(x,y,r){
        var options = {
            isStatic: false,
            restitution: 0.4,
            density:1.2,
        }
        this.body = Bodies.circle(x,y,r/2, options);
        //Matter.Body.setAngle(this.body,angle)
        World.add(world,this.body)
        this.radius = r;
        
         
        
    }
    show(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        //rotate(angle);
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius/2)
        pop();
    }
}